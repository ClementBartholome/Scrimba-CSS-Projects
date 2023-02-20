const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

const mainEl = document.getElementById("main-el")
let postSections = ""

function renderPosts() { 
    for (let i = 0; i < posts.length; i++) {    
        postSections += `
            <section class="post-sections">
                <div">  
                    <div class="user-info">
                        <img class="user-avatar" src="${posts[i].avatar}" alt="User avatar">
                        <div>
                            <h2 class="bold-text">${posts[i].name}</h2>
                            <p>${posts[i].location}</p>
                        </div>    
                    </div>    
                    <div>
                        <img class="post-img" src="${posts[i].post}" alt="Portrait of the user">
                    </div>
                    <div class="post-content">
                        <div class="icons">
                            <button class="likes btn"><img class="fav-icon" id="heart-icon" src="images/icon-heart.png" alt="heart"></button>
                            <button class="btn"><img src="images/icon-comment.png" alt="comment"></button> 
                            <button class="btn"><img src="images/icon-dm.png" alt="dm"></button>      
                        </div>
                        <p class="bold-text likes-el"><span class="likes-count">${posts[i].likes}</span> likes</p>
                        <p class="comments-el"><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>
            </section>   
        `
    }
    mainEl.innerHTML = postSections
}

renderPosts()

const likesBtn = document.getElementsByClassName("likes btn");
let likesEl = document.getElementsByClassName("likes-el")

for (let i = 0; i < likesBtn.length; i++) {
    likesBtn[i].addEventListener('click', function(){
        if (posts[i].liked === false) {
            posts[i].likes ++;
            likesEl[i].innerHTML = posts[i].likes + " " + "likes";
            likesBtn[i].style.filter = "invert(44%) sepia(94%) saturate(7473%) hue-rotate(353deg) brightness(91%) contrast(127%)";
            posts[i].liked = true   
        } else if (posts[i].liked === true) {
            posts[i].likes --;
            likesEl[i].innerHTML = posts[i].likes + " " + "likes";
            likesBtn[i].style.filter = "invert(0%) sepia(6%) saturate(7476%) hue-rotate(328deg) brightness(103%) contrast(106%)";
            posts[i].liked = false;
      }
    }, false);
}  


/* 

const likeBtns = document.querySelectorAll("#likes-btn");
const likesEl = document.getElementsByClassName("likes-el")
const heartIcons = document.querySelectorAll("#heart-icon");
let isLiked = false;

function renderLikes() {
   
    function handleInput(i) {
        if (isLiked === false) {
            heartIcons[i].style.filter = "invert(44%) sepia(94%) saturate(7473%) hue-rotate(353deg) brightness(91%) contrast(127%)";
            posts[i].likes ++;
            likesEl[i].textContent = `${posts[i].likes} likes`;
            isLiked = true;
        } else {
            heartIcons[i].style.filter = "invert(0%) sepia(6%) saturate(7476%) hue-rotate(328deg) brightness(103%) contrast(106%)";
            posts[i].likes --;
            likesEl[i].textContent = `${posts[i].likes} likes`;
            isLiked = false;
        }
    }

    for (let i = 0; i < posts.length; i++) {
        likeBtns[i].addEventListener("click", function () { 
            handleInput(i) })
    }
}

renderLikes()

*/ 


/* 

likesBtn.addEventListener('click', function() {
    posts.likes++;
    likesEl.textContent = posts.likes;
})

const likeClick = () => {
  if (!isLiked) {
    likesBtn.classList.add('isLiked');
    posts.likes++;
    
    isLiked = !isLiked;
  } else {
    likeBtn.classList.remove('isLiked');
    posts.likes--;
    likesEl.textContent = posts.likes;
    isLiked = !isLiked;
  }
};

// Event Listeners

likeBtn.addEventListener('click', likeClick);

*///////////////////////////////////////////////// 
