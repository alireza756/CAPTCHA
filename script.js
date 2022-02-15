var captchaValue = document.getElementById("captcha").innerHTML=Math.floor(Math.random() * 10000);
function rand(){
var inputValue = document.getElementById("value").value;
if(captchaValue == inputValue){
    alert("wellcome")
}
else{
    alert("please try again")
}
}
