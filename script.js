const player1 = document.getElementById("div2");
const player2 = document.getElementById("div3");
const total1 = document.getElementById("total1");
const total2 = document.getElementById("total2");
const current1 = document.getElementById("current1");
const current2 = document.getElementById("current2");
const dice1 = document.getElementById("roll1");
const dice2 = document.getElementById("roll2");
const RollButton = document.getElementById("RollDice")
const hold = document.getElementById("hold");
const Winner1 = document.getElementById("winner1");
const Winner2 = document.getElementById("winner2");
const startbutton = document.getElementById("start-button")
const inputGoal = document.getElementById("goal")
const page1 = document.getElementById("scene1")
const page2 = document.getElementById("scene2")
const NewGameButton = document.getElementById("newGame")
const player1audio= document.getElementById("audio1")
const player2audio= document.getElementById("audio2")

let maxScore
let flag = 1;
let score1 = 0;
let score2 = 0;
let totalscore1 = 0;
let totalscore2 = 0;
current1.innerHTML = 0;
current2.innerHTML = 0;
total1.innerHTML = 0;
total2.innerHTML = 0;
hold.style.opacity = 0.5;
NewGameButton.addEventListener('click',()=>{
    page1.style.display ="block"
    page2.style.display="none"
    Resetallgame()
})
startbutton.addEventListener('click',()=>{
    page1.style.display ="none"
    page2.style.display="block"
    maxScore = inputGoal.value
})
function RollDice1() {
  const Random1 = Math.floor(Math.random() * 6) + 1
  const Random2 = Math.floor(Math.random() * 6) + 1

  holdButton(1);
  if (flag) {
    Checkiamge(Random1, Random2);
    score1 += Random1 + Random2;
    current1.innerHTML = score1;
    player1audio.play()
    player2audio.pause()
    ColorStyle(flag)
    if(Random1===6&&Random2===6){
        reset();
        totalscore1=0
        current1.innerHTML=0
        total1.innerHTML=totalscore1;
        
        
    }
    
  } else {
    ColorStyle(flag)
    Checkiamge(Random1, Random2);
    score2 += Random1 + Random2;
    player1audio.pause();
    player2audio.play();
    current2.innerHTML = score2;
    
    
    if(Random1===6&&Random2===6){
        reset();
        totalscore2=0
        current2.innerHTML=0
        total2.innerHTML=totalscore2;
        
        
    }
  }
}

function TurnGame() {
  if (flag == 0) {
    totalscore1 += score1;
    total1.innerHTML = totalscore1;
    reset();
    CheckTotal();
  }
  if (flag == 1) {
    totalscore2 += score2;
    total2.innerHTML = totalscore2;
    reset();
    CheckTotal();
  }
}
function CheckTotal() {
  const text = "Winner-Winner-Chicken-Dinner";
  if (totalscore1 === maxScore || totalscore2 > maxScore) {
    Winner1.innerHTML = text;
    hold.disabled=true
    RollButton.disabled=true;
  }
  if (totalscore2 === maxScore || totalscore1 > maxScore) {
    Winner2.innerHTML = text;
    hold.disabled=true
    RollButton.disabled=true;
  }
  
}

function Resetallgame() {
  Winner1.innerHTML = "";
  Winner2.innerHTML = "";
  total1.innerHTML = 0;
  total2.innerHTML = 0;
  current1.innerHTML = 0;
  current2.innerHTML = 0;
  score1 = score2 = totalscore1 = totalscore2 = 0;
  flag = 1;
  dice1.innerHTML = "";
  dice2.innerHTML = "";
  hold.disabled=false
    RollButton.disabled=false; 
    player1audio.pause()
    player2audio.pause()
 

  holdButton(0);
}
function Checkiamge(check1, check2) {
    dice1.innerHTML = "";
    dice2.innerHTML = "";
    let images = [
      "./images/dice-1.png",
      "./images/dice-2.png",
      "./images/dice-3.png",
      "./images/dice-4.png",
      "./images/dice-5.png",
      "./images/dice-6.png",
    ];
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.src = images[check1 - 1];
    img2.src = images[check2 - 1];
    dice1.appendChild(img1);
    dice2.appendChild(img2);
  }
  function reset() {
    score1 = score2 =0;
  }
  function Hold() {
    flag = !flag;
    ColorStyle(flag)
    current1.innerHTML = 0;
    current2.innerHTML = 0;
    TurnGame();
    holdButton(0);
  }
  function ColorStyle(flag){
    if(flag){
        player1.style.backgroundColor ="red"
 player2.style.backgroundColor ="aquamarine"
 }else{
     player2.style.backgroundColor="red";
     player1.style.backgroundColor="pink";
 }
  }
  function holdButton(flag) {
    if (flag) {
      hold.style.opacity = 1;
    } else {
      hold.style.opacity = 0.5;
    }
  }