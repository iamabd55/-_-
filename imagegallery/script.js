let cont=document.querySelector(".gallery")
let prevbtn=document.getElementById("leftimg")
let nextbtn=document.getElementById("rightimg")
document.querySelectorAll('.gall-imgs img').forEach(e=>{
    e.addEventListener("click",()=>{
        document.querySelector(".pop-up").style.display="block"
        document.querySelector(".pop-up img").src=e.getAttribute('src');
    })
})
let exit=document.querySelector(".pop-up span")
exit.addEventListener("click",()=>{
    document.querySelector(".pop-up").style.display="none"
})
cont.addEventListener("wheel",(e)=>{
    e.preventDefault();
    cont.scrollLeft+=e.deltaY;
});

nextbtn.addEventListener("click",(e)=>{
    cont.style.scrollBehavior="smooth"
    cont.scrollLeft+=900;
})
prevbtn.addEventListener("click",(e)=>{
    cont.style.scrollBehavior="smooth"
    cont.scrollLeft-=900;
})