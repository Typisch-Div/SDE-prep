let gameSeq=[];
let userSeq=[];

let colorBtns=["yellow","red","blue","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    started=true;
    levelUp();
})

function gameFlash(btn){
    btn.classList.add("gameFlash")
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level:${level}`;
    let rIdx=Math.floor(Math.random()*4);
    let randomColor=colorBtns[rIdx];
    let randomButton=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randomButton);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`GameOver!! Your score was <b>${level}</b>.<br> Press any key to RESTART`;
        reset();
        document.querySelector("body").style.backgroundColor=red;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor=white;
        },150)
    }
}
 
function btnpressed(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnpressed); 
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}