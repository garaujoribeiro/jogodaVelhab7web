let checkMarks = ["coluna1","coluna2","coluna3","row1","row2","row3","diagonal1","diagonal2"]
let winner = 0;



let vez = Math.floor(Math.random()*10)
document.getElementById("infocorpo_vez").innerHTML = `${vez % 2 == 0 ? "x" : "o"}`;
let rounds = 0;


const aumentarCont = ()=>  {vez++; rounds++;
 document.getElementById("infocorpo_vez").innerHTML = `${vez % 2 == 0 ? "x" : "o"}`;
if(rounds>4){checkWin();}}


const checkWin = () => { for(let i = 0; i<checkMarks.length; i++){
    if(/ooo|xxx/g.test([...document.getElementsByClassName(checkMarks[i])].map((item)=>item.innerHTML).join(""))){ console.log("true");
        document.getElementById("infocorpo_resultado").innerHTML = [...document.getElementsByClassName(`${checkMarks[i]}`)].map((item)=>item.innerHTML)[0];
        document.getElementById("infocorpo_vez").innerHTML = "--"
        winner++;
    };
}

}



const marcarElement = (event)=> {
    if(this.event.target.innerHTML != "x" & this.event.target.innerHTML != "o" && winner == 0){
        this.event.target.innerHTML = document.getElementById("infocorpo_vez").innerHTML;
        aumentarCont();
        document.getElementById("infocorpo_vez").innerHTML;
        if(rounds>4){checkWin();}
    }
    ;
}

const reset = () => {vez = Math.floor(Math.random()*10)
    document.getElementById("infocorpo_vez").innerHTML = `${vez % 2 == 0 ? "x" : "o"}`; 
    round = 0;
    winner = 0;
    [...document.getElementsByClassName("item")].map((item)=>item.innerHTML = "");
    document.getElementById("infocorpo_resultado").innerHTML = "--"}