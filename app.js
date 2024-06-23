// SubTask1

const board = document.getElementById("board");
const cells = document.getElementsByClassName("cell");
const msg = document.getElementById("msg");
const players = ["X", "O"];
let current = players[0];

// // add event listeners to each cell
for (let i=0; i<9; i++) {
  cells[i].addEventListener("click", handleCellClick);
}

function handleCellClick(event) {
  // Handle Cell Clicking Functionality
  const curr = event.target.id[4];
  if (event.target.innerHTML === "") {
    event.target.innerHTML = current;
    if(checkWin(current)) return;
    if(checkTie()) return;

    current = current === players[0] ? players[1] : players[0];
    msg.innerHTML = current + "'s turn";
  }
}

// SubTask2

function checkWin(current) {
  // // Check Winning conditions
  //console.log(current);
  if(
    // Check Rows
    ((cells[0].innerHTML === current && cells[1].innerHTML === current && cells[2].innerHTML === current) ||
    (cells[3].innerHTML === current && cells[4].innerHTML === current && cells[5].innerHTML === current) ||
    (cells[6].innerHTML === current && cells[7].innerHTML === current && cells[8].innerHTML === current)) ||
    // Check Columns
    ((cells[0].innerHTML === current && cells[3].innerHTML === current && cells[6].innerHTML === current) ||
    (cells[1].innerHTML === current && cells[4].innerHTML === current && cells[7].innerHTML === current) ||
    (cells[2].innerHTML === current && cells[5].innerHTML === current && cells[8].innerHTML === current)) ||
    // Check Diagonals
    ((cells[0].innerHTML === current && cells[4].innerHTML === current && cells[8].innerHTML === current) ||
    (cells[2].innerHTML === current && cells[4].innerHTML === current && cells[6].innerHTML === current))
  ){
    msg.innerHTML = current + " Wins!";
    for(let i=0; i<9;i++){
      cells[i].removeEventListener("click", handleCellClick);
    }
    return true;
  }
}

function checkTie() {
  // // Check Tie conditions
  let tie = true;
  for(let i=0; i <9; i++){
    if(cells[i].innerHTML === ""){
      tie = false;
      break;
    }
  }
  if(tie){
    msg.innerHTML = "It's a Tie!";
    for(let i=0; i<9;i++){
      cells[i].removeEventListener("click", handleCellClick);
    }
    return true;
  }

}

// SubTask3
function restart() {
  // // Restart Game Functionality
  for(let i= 0; i<9; i++){
    cells[i].innerHTML = "";
  }
  current = players[0];
  msg.innerHTML = current + "'s turn";
  for(let i=0; i<9;i++){
    cells[i].addEventListener("click", handleCellClick);
  }
}
