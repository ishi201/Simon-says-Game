let gameSeq=[];
let userSeq=[];


let btn=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){
    console.log("game is started");
    started=true;

    levelUp();
}
});

function btnflash(btn){
btn.classList.add("flash");

setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function userflash(btn){
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }
    

function levelUp(){
    userSeq=[];
 level++;
 h2.innerText=`Level ${level}`;

 //random btn choose
 let btnindex=Math.floor(Math.random()*3);
 let randomColor=btn[btnindex];
 let randbtn=document.querySelector(`.${randomColor}`);
//  console.log(randomColor)
gameSeq.push(randomColor);
console.log(gameSeq);
 btnflash(randbtn);
}


function checkAns(idx){
   //console.log("curent level: ",level);
  
   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
  setTimeout(levelUp,1000);
    }
   // console.log("same value");
   }

   else{
    h2.innerHTML=`Game Over! Your score is ${level} <br> Press any key to restart.`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
   }
}


function btnpress(){
    // console.log(this);
    let btn=this;
   userflash(btn);    
   userColor=btn.getAttribute("id");
   //console.log(userColor);
   userSeq.push(userColor);
   
   checkAns(userSeq.length-1);
}




let allbtn=document.querySelectorAll(".one");
for(one of allbtn){
    one.addEventListener("click" , btnpress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}