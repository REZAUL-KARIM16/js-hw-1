let clickbtn=document.querySelector('.clickbtn');

let header=document.querySelector('h1');

let backbtn=document.querySelector('.back');


function newHeading(){

    header.innerHTML="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries"
   
    backbtn.style.visibility="visible"
    clickbtn.style.visibility="hidden"

}

clickbtn.addEventListener('click',newHeading)

backbtn.addEventListener('click',()=>{

    backbtn.style.visibility="hidden"
    clickbtn.style.visibility="visible";
    header.innerHTML="JavaScript is a scripting language"

})


// light on off section


let onbtn=document.querySelector('.onbtn');

let offbtn=document.querySelector('.offbtn');

let img=document.querySelector('.lightOnOff img');


onbtn.addEventListener('click',()=>{

img.src="on.jpg"

onbtn.style.visibility="hidden"
offbtn.style.visibility="visible";

})

offbtn.addEventListener('click',()=>{


    img.src="off.jpg"
    
    onbtn.style.visibility="visible"
offbtn.style.visibility="hidden";

})