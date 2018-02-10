class LoginController {
    constructor($http)
    {
      this.$http=$http;
      this.email="";
      this.password="";
      this.error="";
    }
    doLogin(){
       
      var body={
              "email":this.email,
              "password":this.password

            };
            this.$http.post("http://localhost:3000/api/user/login",body)
            .then((success)=>{
                  //server responded with success
                  alert("success");
            },(error)=>{
              //server responded with error
             this.error=error.data.error;
            })
            .catch((exception)=>{
              //network exception 
              console.error(exception);
            })

    }
}
LoginController.$inject=["$http"];
export default LoginController;