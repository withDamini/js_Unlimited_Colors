//generate a random color..
const randomcolor=function(){
    const hex="0123456789ABCDEF";
    let color='#'
    for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let clear;
console.log(randomcolor());
document.querySelector('#start').addEventListener('click',function(){
 clear=setInterval(function(){document.body.style.backgroundColor=randomcolor()},1000);
},false);

document.querySelector('#stop').addEventListener('click',function(){
   clearInterval(clear); 
   clear=null;
},false);