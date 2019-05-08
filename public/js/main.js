
var um = (function(){


    return {
        umProperties: function(){
        },
        umText: function(){
        }
    }
})();


var uploadUserMacroText = function(){
   //if um.umProperties.newFile...
   //   um.createNewFile()
   //   um.upload();
   //
   //else
   //   if(um.warnOverwrite()){um.upload()};
   alert("hello");
}

const user = (function(){
  let _loginStatus = undefined;

  return{
    loginStatus : {loggedIn: 0, loggedOut: 1},
    setLoginStatus : function(status){
      this.password = "xxxx";
      _loginStatus = status;
    },
    getLoginStatus : function(){
      return _loginStatus;
    }

  }
})();



AJS.toInit(function($){

  //is the user logged in?
  if(AJS.$("#left-nav-login-link").text() === "Login"){
    user.setLoginStatus(user.loginStatus.loggedOut);
  }
  else{
    user.setLoginStatus(user.loginStatus.loggedIn);
  };

  AJS.$("#left-nav-login-link").click(function(e){
    e.preventDefault();
    AJS.dialog2("#login-form").show();
  });

  AJS.$("#edUpload").click(function(e) {
        e.preventDefault();
        uploadUserMacroText();
    });


    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");




});
