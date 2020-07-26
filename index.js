const button=document.getElementById("buttonId");
const input=document.getElementById("inputId");
var posts=[
    // {
    // id:"",
    // description:"",
    // time:"",
    // section:"Software Engineering"
    // comments:[{
    //     id:"",
    //     content:"",
    //     time:""
    // }]
// }
]
document.addEventListener("load",function () {
    if(!input.value|| input.value===""){
        button.style.opacity=.3
    }else {
        button.style.opacity=1
    }
})
const NewPost=()=>{
    button.addEventListener('click',function () {
        const desc=input.value;
        if(desc&& desc!==""){
            posts.push({
                id:'osama@come111',
                description:desc,
                section:"Software Engineering",
                date:new Date()
            })
            posts.sort((a,b)=>{
               if (a.date<b.date) return 1
                else return -1
            })
            const main=document.getElementById('main-content');

            main.innerHTML=""
            main.innerHTML=createPosts(posts)
        }

    })
}

NewPost();
const createPosts=(posts)=>{
    let content=""

    if(posts.length>0){
        for(let post of posts){
            content+=`<div class="content-card">
            
            <div class="content-card-avatar">
                <div class="content-card-avatar-icon">
                    <i class="fas fa-user"></i>
                </div>
                <img src="images/osama.jpg" alt="image">
            </div>
            <div class="content-card-main">
                <p>${post.section}</p>
                <h3>Anni </h3><span>${post.id}</span>

                <p>${post.description}</p>
                <div class="content-card-footer-icons">
                    <i class="far fa-comment"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-upload"></i>
                </div>

            </div>        
          
          
          </div>`

        }

    }
    return content;
}
