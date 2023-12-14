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
// console.log(createDice(6));
const diceContent=document.querySelector(".firstDice");
const diceContent_2=document.querySelector(".secondDice");

diceContent.appendChild(createDice(3));
diceContent_2.appendChild(createDice(3));


