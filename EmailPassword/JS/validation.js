let emailInput = document.getElementById("exampleInputEmail1");
let passwordInput = document.getElementById("exampleInputPassword1");
let checkBox = document.getElementById("exampleCheck1");
let error1 = document.getElementById("error1");
let emailHelp = document.getElementById("emailHelp");
let errorList = document.getElementById("errorList");

function getCookie(){
    let cookieAr = document.cookie
    let totalCookies = cookieAr.split(';');
    
    for(let eachCookie of totalCookies){
        if(eachCookie.includes("username")){
            console.log(eachCookie.substring(9));
            emailInput.value = eachCookie.substring(9)
        }
        else{
            console.log(eachCookie.substring(6));
            passwordInput.value = eachCookie.substring(6);
        }
    }
}
getCookie();
function validate1(){
    let regExp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let emailInputValue = emailInput.value;
    // console.log(regex.test(emailInputValue));
    if(emailInput.value===""){
        // alert("Required");
        error1.textContent = "Required";
        error1.style.color = "red";
        emailHelp.classList.add("d-none");
    }
    else if(regExp.test(emailInputValue)===false){
        // alert("Enter valid email");
        emailHelp.classList.add("d-none");
        error1.textContent = "Enter Valid Email";
    }
    else{
        emailHelp.classList.add("d-block");
        error1.textContent = "";
        return true;
    }
}
function validate2(){
    let regExp = new RegExp("(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,24}");
    let passwordInputValue = passwordInput.value;
    if(passwordInput.value===""){
        // alert("Required");
        error2.textContent = "Required";
        error2.style.color = "red";
    }
    else if(regExp.test(passwordInputValue)===false){
        // alert("Enter valid password");
        error2.textContent = "";
        errorList.style.display = "block";
    }
    else{
        error2.textContent="";
        errorList.style.display = "none";
        return true;
    }
}

function validateForm(event){
    let emailValidate = validate1();
    let passwordValidate = validate2();
    if(emailValidate===true && passwordValidate===true){
        let emailValue = emailInput.value;
        let pwdValue = passwordInput.value;
        if(checkBox.checked===true){
            document.cookie = `username=${emailValue}`;
            document.cookie = `pswd=${pwdValue}`;
        }
        else{
            document.cookie = "username=";
            document.cookie = "pswd="
        }
        return true;
    }
    else{
        return false;
    }

}