var uscore=0;
var cscore=0;

const msg=document.querySelector("#msg");

const usercounter=document.querySelector("#myscore");
const comcounter=document.querySelector("#comscore");
const choice=document.querySelectorAll(".choice");

const getComChoice=()=>{
    var a=["Scissors","rock","paper"];
    var idx=Math.floor(Math.random()*3);
    return a[idx];
}

const drawFun=()=>{
 msg.innerText="Game Is Draw,Play Again.";
 msg.style.backgroundColor="#081b31";

}

const showWinner=(userWin,userChoice,comChoice)=>{

    if(userWin)
    {
        uscore+=1;
        msg.innerText=`You win !, Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
        usercounter.innerText=uscore;
    }
    else{
        cscore+=1;
        msg.innerText=`You Loss, Your ${userChoice} Can 't beats ${comChoice}`;
        msg.style.backgroundColor="red";
        comcounter.innerText=cscore;
    }

}
const playGame=(userChoice)=>{

    let userWin=false;
    const comChoice= getComChoice();

    if(comChoice===userChoice)
    {
        drawFun();
    }
    else {

        if(userChoice==="paper" && comChoice==="rock" ||userChoice==="rock" && comChoice==="Scissors" || userChoice==="Scissors" && comChoice==="paper")
        {
            userWin=true;
        }
        else{
            userWin=false;
        }

        showWinner(userWin,userChoice,comChoice);

    }

   

}
choice.forEach((ch)=>{

        ch.addEventListener("click",()=>{
        const userChoice= ch.getAttribute("id");


         playGame(userChoice);

        });
})
