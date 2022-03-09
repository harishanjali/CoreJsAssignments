const getPostBtn = document.getElementById("getPostBtn");
const postLists = document.getElementById("postLists");



function createPosts(title,body){
    let heading = document.createElement("h3");
    let description = document.createElement("p");
    let horizontal = document.createElement("hr");

    heading.textContent = title;
    description.textContent = body;

    postLists.appendChild(heading);
    postLists.appendChild(description);
    postLists.appendChild(horizontal);

}
getPostBtn.addEventListener('click',()=>{
    const URL="https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
        .then(res=> res.json())
        .then(data=>{
            data.forEach((each)=>{
                createPosts(each.title,each.body);
            })
        })
        .catch(err=>{
                console.log(err)
        })
})

