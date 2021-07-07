//const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const { ObservableArray } = require("@nativescript/core");
const { Observable } = require("@nativescript/core");
var ListViewModel = require("~/view.models/list-view-model")

var page;

exports.onLoad = (args) => {
    page = args.object
    page.bindingContext = new ListViewModel()
}
