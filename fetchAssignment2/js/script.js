const getUsersBtn = document.getElementById("getUsersBtn");
const usersList = document.getElementById("usersList");

function createRowOfDetails(srNumber,personName,personEmail,personUsername,personPhone,personWebsite){
    let row = document.createElement("tr");
    let serialNumber = document.createElement("td")
    let name = document.createElement("td")
    let email = document.createElement("td")
    let username = document.createElement("td")
    let phone = document.createElement("td")
    let website = document.createElement("td")

    serialNumber.innerText = srNumber;
    name.innerText = personName;
    email.innerText = personEmail;
    username.innerText = personUsername;
    phone.innerText = personPhone;
    website.innerText = personWebsite;

    row.appendChild(serialNumber);
    row.appendChild(name);
    row.appendChild(email);
    row.appendChild(username);
    row.appendChild(phone);
    row.appendChild(website);
    usersList.appendChild(row);


}

getUsersBtn.addEventListener('click',()=>{
    const URL="https://jsonplaceholder.typicode.com/users ";
    fetch(URL)
        .then(res=> res.json())
        .then(data=>{
            data.forEach((each)=>{
                createRowOfDetails(each.id,each.name,each.email,each.username,each.phone,each.website)
            })
        })
        .catch(err=>{
                console.log(err)
        })
})