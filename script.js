const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('#navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const sr=scrollreveal({
    distance:'45px',
    duration:2700,
    rest:true
})
sr.reveal('.home-text',{deley:350,origin:'left'})
sr.reveal('.home-img',{deley:350,origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{deley:200,origin:'bottom'})


