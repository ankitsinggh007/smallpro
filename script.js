const changecolor=document.querySelector(".changeclr");
const changshape=document.querySelector(".changeshape");
const child=document.querySelector(".child");
const img=document.getElementsByTagName("img");
const parent=document.querySelector(".parent");
const changeclr=function(){
    const clr=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    parent.style.backgroundColor=clr

}
const changeshape=function(){
    const shape=parseInt(Math.random()*(13-1)+1);
    img[0].src=`img/img ${shape}.png`;
}
changecolor.addEventListener("click",changeclr);
changshape.addEventListener("click",changeshape);