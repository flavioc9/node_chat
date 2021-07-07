const { Observable } = require("@nativescript/core");
// const { fetchModule } = require("@nativescript/core");
const fetchModule = require("tns-core-modules/fetch");
const config = require("~/shared/configs")


function User(info) {
    info = info || {}

    const viewModel = new Observable();
    viewModel.email = info.email || "";
    viewModel.password = info.password || "";

    viewModel.login = async () => {
       const response = await fetchModule.fetch(config.apiUrl + "user/" + config.appKey + "/login", {
            method: "POST",
            body: JSON.stringify({
                username: viewModel.get("email"),
                password: viewModel.get("password")
            }),
            headers: getCommonHeaders()
        });

        try{
            handleErrors(response);
        }catch(e){
            return false;
        }

        const data = await response.json();

        if(data._kmd.authtoken){
            config.token = data._kmd.authtoken;
            return true;
        }

        return false;

    }

    return viewModel;
}

function getCommonHeaders(){
    return {"Authorization" : config.appUserHeader, "Content-Type" : "application/json"}
}

function handleErrors(response) {
    if (!response.ok) {
      console.log(JSON.stringify(response));
      throw Error(response.statusText);
    }
    return response;
  }


module.exports = User;
