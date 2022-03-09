let image = document.getElementById("image");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let uname = document.getElementById("uname")
let pword = document.getElementById("pword")
let cword = document.getElementById("cword")
let myForm = document.getElementById("myForm");
let showPswd = document.getElementById("showPswd");
let flag = false;

let imageUrl = ["images/8606e03fd8fb47bacd4fe4e467c32c56.png",
                "images/8622a12bd05fe069859adf9e4ee64c34.png",
                "images/46917d2cb73990ab893c9cdcc1de4252.png",
                "images/298095faa4f5c82f89ea64cf8c3ff230.png",
                "images/4d9be86a0abb5fd3e0264cbdc3a7850d1.png"
]
index = 0;
let uniqueId = setInterval(function(){
    if(index==5){
        index=0;
    }
    image.src = imageUrl[index];
    index++;
},3000);

showPswd.onclick = function(){
    if(flag==false){
        pword.type = "text";
        cword.type = "text";
        flag=true;
    }
    else{
        pword.type = "password";
        cword.type = "password";
        flag = false;
    }
    
}

let error1 = document.getElementById("error1");
function validate1(){
    if(fname.value==""){
        error1.textContent="Required";
    }
    else{
        fname.style.border = "1px solid green";
        error1.textContent="";
        return true;
    }
}

let error2 = document.getElementById("error2");
function validate2(){
    if(lname.value==""){
        error2.textContent="Required";
    }
    else{
        lname.style.border = "1px solid green";
        error2.textContent="";
        return true;
    }
}
let error3 = document.getElementById("error3");
function validate3(){
    // pattern="[A-Za-z]{3,6}"
    let regExp = new RegExp("[A-Za-z]{3,8}");
    if(uname.value==""){
        error3.textContent="Required";
    }
    else if(regExp.test(uname.value)==false){
        error3.textContent = "Enter valid Username";
    }
    else if(uname.value.length<3 || uname.value.length>8){
        error3.textContent = "Character between 3 to 8 only.";
    }
    else{
        uname.style.border = "1px solid green";
        error3.textContent="";
        return true;
    }
}

let error4 = document.getElementById("error4");
function validate4(){
    // pattern="(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}"
    // let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    let regExp = new RegExp("(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}");

    if(pword.value==""){
        error4.textContent="Required";
    }
    else if(regExp.test(pword.value)==false){
        error4.textContent="";
        let spanNode = document.createElement("span");
        spanNode.textContent = "The Password should contain at least One";
        let olNode = document.createElement("ol");
        let liNode1 = document.createElement("li");
        liNode1.textContent = "Upper Letter";
        let liNode2 = document.createElement("li");
        liNode2.textContent = "Lower Letter";
        let liNode3 = document.createElement("li");
        liNode3.textContent = "Digit";
        let liNode4 = document.createElement("li");
        liNode4.textContent = "Special Character";
        olNode.append(liNode1,liNode2,liNode3,liNode4);
        error4.append(spanNode,olNode);
    }
    else if(pword.value.length<8){
        error4.textContent = "Length should be greaterthan 8"
    }
    else{
        pword.style.border = "1px solid green";
        error4.textContent="";
        return true;
    }
}

let error5 = document.getElementById("error5");
function validate5(){
    // pattern="(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}"
    if(cword.value==""){
        error5.textContent="Required";
    }
    else if(cword.value!==pword.value){
        error5.textContent = "Password should be same as above";
    }
    else{
        cword.style.border = "1px solid green";
        error5.textContent="";
        return true;
    }
}

function validateForm(event){
    // event.preventDefualt();
    let firstNameV = validate1();
    let lastNameV = validate2();
    let unameV = validate3();
    let passwordV = validate4();
    let cwordV = validate5();
    if(firstNameV === true && lastNameV === true && unameV===true && passwordV===true && cwordV===true){
        return true;
    }
    else{
        return false;
    }
}