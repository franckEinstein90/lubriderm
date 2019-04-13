
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
AJS.toInit(function($){
  AJS.$("#edUpload").click(function(e) {
        e.preventDefault();
        uploadUserMacroText();
    });


    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");



    
});
