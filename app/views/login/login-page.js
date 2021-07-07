//const User = require("~/view.models/user-view-model")
var UserViewModel = require("~/view.models/user-view-model")

var user = new UserViewModel();
var page;

exports.onLoad = (args) => {
    page = args.object
    page.bindingContext = user
    console.log( user)
}

exports.signIn = async () => {

    const login = await user.login();
    if(login){
        page.frame.navigate("/views/list/list-page")
    }else{
        alert("Login inválido")
    }
}
