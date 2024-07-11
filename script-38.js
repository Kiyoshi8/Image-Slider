let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length -1])
})

function toggle(){
    var shortclip= document.querySelector(".shortclip")
    var video= document.querySelector("video")
    shortclip.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}