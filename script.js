const container = document.querySelector("#container");
const bgColor = ["rgb(152, 152, 236)", "#5bf5a8", "#7ff55b", "#a5f55b", "#e6f55b", "#f55bed", "#f55b81", "#60f55b"];
const cells = document.querySelectorAll(".cell");
const buttons = document.querySelectorAll(".btn");
const welcome = document.querySelector("#welcome");
const header = document.querySelector("header");

buttons.forEach(button => (button.addEventListener("click", () => {
    let ch = button.value;
    header.style.display = "flex";
    container.style.display = "grid";
    welcome.style.display = "none";
    return ch
})))
 

cells.forEach(cell => (cell.addEventListener("click", () => {
    cell.textContent = ch;
})))

    // for (let i = 0; i < bgColor.length; i++) {
    //     setTimeout(() => {
    //         container.style.background = bgColor[i]; 
    //     }, i * 3000)
        
    // }
