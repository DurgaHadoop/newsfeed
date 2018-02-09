function route($stateProvider)
{
  $stateProvider.state("login",{
      url:"/login",
      template:require("./login.html"),
      controller:"LoginController",
      controllerAs:"loginCtrl"
  })


}
route.$inject=["$stateProvider"];
export default route;