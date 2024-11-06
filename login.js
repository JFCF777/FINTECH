$(document).ready(function(){
    $("#sing_in").click(function(e){
        e.preventDefault();
        var usuario_login = $("#user_name").val();
        var pws_login = $("#pws").val();
        alert(usuario_login + " " + pws_login);
        if (usuario_login = "JFCF" && pws_login == "1234") {
            window.location.href = "index.html";
        }else{
            window.location.href = "login.html";
        }
        
    })
})