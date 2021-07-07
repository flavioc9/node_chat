const { Observable } = require("@nativescript/core");
const { ObservableArray } = require("@nativescript/core");

function List() {
    var viewModel = new Observable();

    viewModel.listaMercearia = new ObservableArray([
        { name: "Batatas" },
        { name: "Cebolas" },
        { name: "Cenouras" },
        { name: "Morangos" }
    ])

    return viewModel;
}

module.exports = List;
