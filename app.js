
// create dice
function createDice(number){
    const dotPositionMatrix={
        1:[
            [50,50]
        ],
        2:[
            [20,20],
            [80,80]
        ],
        3:[
            [20,20],
            [50,50],
            [80,80]
        ],
        4:[
            [20,20],
            [20,80],
            [80,20],
            [80,80]
        ],
        5:[
            [20,20],
            [20,80],
            [50,50],
            [80,20],
            [80,80]
        ],
        6:[
            [20,20],
            [20,80],
            [50,20],
            [50,80],
            [80,20],
            [80,80]
        ]
    };

    const dice=document.createElement("div");
    dice.classList.add("dice");
    for (const dotPosition of dotPositionMatrix[number]){
        const dot=document.createElement("div");
        dot.classList.add("dice-dot");
        dot.style.setProperty("--top",dotPosition[0]+"%");
        dot.style.setProperty("--left",dotPosition[1]+"%");
        dice.appendChild(dot);
    }
    return dice;  
}
//random number generate
function  randomDice(){
    const random=Math.floor((Math.random()*6)+1);
    return random;
}
// console.log(createDice(6));
const diceContent=document.querySelector(".firstDice");
const diceContent_2=document.querySelector(".secondDice");

////diceContent.appendChild(createDice(randomDice()));
//diceContent_2.appendChild(createDice(randomDice()));
let total=0;

//button oparation
const btn=document.querySelector(".b1");
btn.addEventListener("click",()=>{
    diceContent.innerHTML="";
    const r=randomDice();
    total+=r;
    diceContent.appendChild(createDice(r))
    document.getElementById("t_1").innerHTML=total;
    
});
let total_2=0;
const btn_2=document.querySelector(".b2");
btn_2.addEventListener("click",()=>{
    diceContent_2.innerHTML="";
    const r=randomDice();
    total_2+=r;
    diceContent_2.appendChild(createDice(r))
    document.getElementById("t_2").innerHTML=total_2;
});

document.getElementById("close-round").addEventListener("click",()=>{
    if(total_2>total){
        document.getElementById("winner").innerHTML="player 02 is win....!";
    }else{
        document.getElementById("winner").innerHTML="player 01 is win....!";
    }
})




