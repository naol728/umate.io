function verifyUsername(){
    var password=document.getElementById("password").value;
var username=document.getElementById("username").value;
var loginbtn=document.getElementById("loginbtn");
var result=document.getElementById("result");
    var username1="naolm";
    var password1="12345678";
    if(password===password1 && username===username1){
        window.location.href="main.html";
    }
    else{
        result.textContent="username or password is incorect";
    }
    return false;
}
const pwd=document.querySelector(".login input[type='password']");
const btn=document.querySelector(".login .fa-regular")
btn.onclick=()=>{
    if(password.type=="password"){
        password.type="text"
    }
    else{
        password.type="password"
    }
}