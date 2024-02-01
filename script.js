const container = document.querySelector("#container");
const bgColor = ["rgb(152, 152, 236)", "#5bf5a8", "#7ff55b", "#a5f55b", "#e6f55b", "#f55bed", "#f55b81", "#60f55b"];
const cells = document.querySelectorAll(".cell");
const buttons = document.querySelectorAll(".btn");
const welcome = document.querySelector("#welcome");
const scoreboard = document.querySelector(".score-board");
const exitbutton = document.querySelector(".exit-btn");
const menubuttons = document.querySelector(".menu-btns");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let ch;
let gameActive = false

buttons.forEach(button => (button.addEventListener("click", () => {
    gameActive = true;
    ch = button.textContent;
    scoreboard.style.visibility = "visible";
    container.style.display = "grid";
    welcome.style.display = "none";
    exitbutton.style.display = "inline-block";
    userMove()
  })))

const getPosition = (index) => {
    return index
}

const userMove = () => {
    cells.forEach((cell, index) => (cell.addEventListener("click", () => {
        // gameActive = true;
        if (!numbers.includes(cell.textContent) && gameActive == true) {
            cell.textContent = ch;
        }
        // getPosition(index);
        console.log("T", index);
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
    if (gameActive == true) {
        // let a = getPosition();
        let i = generateInitialSix(a);
        let random = i.length == 6 ? Math.floor(Math.random() * 7) : Math.floor(Math.random() * 5)
        console.log(random);
        console.log(i);
        console.log(i[random]);
        if (ch == "O") {
        cells[i[random]].textContent = "X"
        } else {
        cells[i[random]].textContent = "O"
        }
    }
}

// computerMove();

    // for (let i = 0; i < bgColor.length; i++) {
    //     setTimeout(() => {
    //         container.style.background = bgColor[i]; 
    //     }, i * 3000)
        
    // }
