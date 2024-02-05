const container = document.querySelector("#container");
const bgColor = ["rgb(152, 152, 236)", "#5bf5a8", "#7ff55b", "#a5f55b", "#e6f55b", "#f55bed", "#f55b81", "#60f55b"];
const cells = document.querySelectorAll(".cell");
const buttons = document.querySelectorAll(".btn");
const welcome = document.querySelector("#welcome");
const scoreboard = document.querySelector(".score-board");
const exitbutton = document.querySelector(".exit-btn");
const theme = document.querySelector(".theme-btn");
const exbutton = document.querySelector(".exbtn");
const cancel = document.querySelector(".cancel-btn");
const shadow = document.querySelector(".shadow");
const exdiag = document.querySelector("#exit-dialogue");
const body = document.querySelector("body");
const title = document.querySelector(".tle");
const tops = document.querySelectorAll(".top");
const bottom = document.querySelectorAll(".bottom");
const left = document.querySelectorAll(".left");
const right = document.querySelectorAll(".right");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let ch;
let gameActive = false;
let computerFirstMove = 0;
let b;
let usedPosition = [];

buttons.forEach(button => (button.addEventListener("click", () => {
    gameActive = true;
    ch = button.textContent;
    scoreboard.style.visibility = "visible";
    container.style.display = "grid";
    welcome.style.display = "none";
    exitbutton.style.display = "inline-block";
    theme.style.right = "unset";
    theme.style.position = "static";
    userMove();
    computerFirstMove += 1;
  })))

 exitbutton.addEventListener("click" , () =>{
  shadow.style.display = "flex";
  
 }) 

 exbutton.addEventListener("click" , () =>{
  shadow.style.display = "none";
  scoreboard.style.visibility = "hidden";
  container.style.display = "none";
  welcome.style.display = "grid";
  exitbutton.style.display = "none";
  theme.style.right = "10px";
  theme.style.position = "absolute";
 })

 cancel.addEventListener("click" , () => {
  shadow.style.display = "none"
  scoreboard.style.visibility = "visible";
  container.style.display = "grid";
  welcome.style.display = "none";
  exitbutton.style.display = "inline-block";
 })


theme.addEventListener("click" , () =>{
  mode = document.querySelector("body").style.backgroundColor;
  if(mode != "black"){
    buttons.forEach((btn, index) =>{
      buttons[index].style.backgroundColor = "rgb(50, 50, 50)";
      buttons[index].style.Color = "white";
    })
    container.style.backgroundColor = "black";
    container.style.color = "white";
    welcome.style.backgroundColor = "rgb(20, 20, 20)";
    welcome.style.boxShadow = "unset"
    welcome.style.color = "white";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    title.style.color = "white";
    scoreboard.style.backgroundColor = "rgb(20,20,20)";
    scoreboard.style.color = "white";
    theme.style.backgroundColor = "rgb(20,20,20)";
    theme.style.color = "white";
    exitbutton.style.backgroundColor = "rgb(20, 20, 20)";
    exitbutton.style.color = "white";
    exdiag.style.backgroundColor = "rgb(20, 20, 20)";
    exdiag.style.color = "white";
    exdiag.style.boxShadow = "unset";
    cells.forEach( (cell, index) => {
      tops[index].style.borderBottom = "1px solid white";
      bottom[index].style.borderTop = "1px solid white";
      left[index].style.borderRight = "1px solid white";
      right[index].style.borderLeft = "1px solid white";
    } )


  }

  else if ( mode != "white"){
    buttons.forEach((btn, index) =>{
      buttons[index].style.backgroundColor = "grey";
      buttons[index].style.Color = "black";
    })
    container.style.backgroundColor = "white";
    container.style.color = "black";
    welcome.style.backgroundColor = "white";
    welcome.style.color = "black";
    welcome.style.boxShadow = " 5px 5px 5px rgba(53, 53, 53, 0.8)"
    body.style.backgroundColor = "white";
    body.style.color = "black";
    title.style.color = "black";
    scoreboard.style.backgroundColor = "grey";
    scoreboard.style.color = "black";
    theme.style.backgroundColor = "grey";
    theme.style.color = "white";
    exitbutton.style.backgroundColor = "grey";
    exitbutton.style.color = "white";
    exdiag.style.backgroundColor = "white";
    exdiag.style.color = "black";
    exdiag.style.boxShadow = " 5px 5px 5px rgba(53, 53, 53, 0.8)";
    cells.forEach( (cell, index) => {
      tops[index].style.borderBottom = "1px solid black";
      bottom[[index]].style.borderTop = "1px solid black";
      left[index].style.borderRight = "1px solid black";
      right[index].style.borderLeft = "1px solid black";
    } )
  }

})


const getPosition = (index) => {43
    return index
}

const userMove = () => {
    cells.forEach((cell, index) => (cell.addEventListener("click", () => {
        // gameActive = true;
        if (!numbers.includes(cell.textContent) && gameActive == true) {
            cell.textContent = ch;
        }
        // getPosition(index);
        console.log("What user chose", index);
        usedPosition.push(index);
        computerMove(index);
})))
}

function generateInitialSix(playerMove) {
    const initialSix = [];
    
    // Add player's move to the initial six
    initialSix.push(playerMove);
  
    // Determine the corresponding points based on the player's move
    switch (playerMove) {
      case 0:
        initialSix.push(1, 2, 3, 6, 4, 8);
        break;
      case 1:
        initialSix.push(0, 2, 4, 7,);
        break;
      case 2:
        initialSix.push(0, 1, 5, 8, 4, 6);
        break;
      case 3:
        initialSix.push(0, 6, 4, 5,);
        break;
      case 4:
        initialSix.push(0, 8, 2, 6, 1, 7);
        break;
      case 5:
        initialSix.push(2, 8, 3, 4,);
        break;
      case 6:
        initialSix.push(3, 0, 7, 8, 2, 4);
        break;
      case 7:
        initialSix.push(6, 8, 1, 4,);
        break;
      case 8:
        initialSix.push(4, 2, 7, 6, 0, 5);
        break;
      default:
        break;
    }
  
    return initialSix;
  }
  

const computerMove = (a) => {
  // console.log(computerFirstMove);
    if (gameActive == true && computerFirstMove == 1) {
        // let a = getPosition();
        let i = generateInitialSix(a);
        console.log("Unaltered array", i);
        i = i.filter(item => item !== i[a])
        let random = Math.floor(Math.random() * i.length);
        console.log("computer move", random);
        console.log("USer position", usedPosition);
        while (usedPosition.includes(random)) {
          random = Math.floor(Math.random() * i.length);
        }
        console.log("Computer move second", random);
        console.log("Selected array", i);
        console.log("index picked by the computer", i[random]);
        if (ch == "O" && !cells[i[random]].textContent) {
          cells[i[random]].textContent = "X";
          usedPosition.push(i[random])  
          b = i.filter(item => item !== i[random]);
        } else if (ch == "X" && !cells[i[random]].textContent) {
          cells[i[random]].textContent = "O";
          usedPosition.push(i[random])  
          b = i.filter(item => item !== i[random]);
        }
    } else if (gameActive == true && computerFirstMove > 1) {
      let random = Math.floor(Math.random() * b.length);
      b = b.filter(item => item !== b[a])
      console.log("New array", b);
      console.log("2 computer move", random);
      console.log("USer position", usedPosition);
      while (usedPosition.includes(random)) {
        random = Math.floor(Math.random() * b.length);
      }
      console.log("2 Computer move second", random);
      if (ch == "O" && !cells[b[random]].textContent) {
        cells[b[random]].textContent = "X";
        usedPosition.push(i[random])  
        b = b.filter(item => item !== b[random]);
      } else if (ch == "X" && !cells[b[random]].textContent) {
        cells[b[random]].textContent = "O";
        usedPosition.push(i[random])  
        b = b.filter(item => item !== b[random]);
      }
    }
    computerFirstMove += 1;
    
}

// computerMove();

    // for (let i = 0; i < bgColor.length; i++) {
    //     setTimeout(() => {
    //         container.style.background = bgColor[i]; 
    //     }, i * 3000)
        
    // }
