import angular from "angular";
import uiRouter from "angular-ui-router";
import LoginController from "./login.controller";
import route from "./login.route";
var loginComponent=angular.module("Newsfeed.login",[uiRouter])
.config(route)
.controller("LoginController",LoginController)
.name;
export default loginComponent;