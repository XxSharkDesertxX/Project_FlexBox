let btn = document.querySelector(".icon-bars");
let mnue = document.querySelector(".nav");
let iconBtn = document.querySelector(".icon-bars i");


btn.addEventListener("click",function () {
    if(iconBtn.className ==="fa fa-bars"){
        mnue.style.left="0";
        iconBtn.classList="fa fa-times";
    }else{
        mnue.style.left="-224px";
        iconBtn.classList="fa fa-bars";
    }
});