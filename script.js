// Adding Event Listener
a = document.getElementsByClassName("row");
let move = "X";
let win = false;
for (row of a) {
  elem = row.getElementsByTagName("td");
  for (tdElem of elem) {
    tdElem.addEventListener("click", execute);
  }
}

// Data Storage
data = [...Array(3)].map((elem) => Array(3).fill(" "));
console.log(a);

function moveFinder() {
  if (move === "X") {
    move = "O";
  } else {
    move = "X";
  }
  return move;
}

function execute(elem) {
  let blockPosition = elem.currentTarget.getAttribute("value");
  let row = parseInt(blockPosition[0]);
  let col = parseInt(blockPosition[1]);

  if (win != true) {
    if (data[row][col] === " ") {
      data[row][col] = move;
      elem.currentTarget.innerHTML = move;
      val = winner_case(data);
      if (val != true) {
        move = moveFinder();
        document.getElementsByClassName(
          "message"
        )[0].innerHTML = `Next Turn is '${move}'`;
      } else {
        document.getElementsByClassName("message")[0].innerHTML =
          move + " Wins !!";
        win = true;
      }
    } else {
      document.getElementsByClassName("message")[0].innerHTML =
        "This Cell Is Already Filled";
    }
  }
}

function winner_case(data) {
  for (let i = 0; i < 3; i++) {
    let flag = true;
    let val = data[i][0];
    for (let j = 0; j < 3; j++) {
      flag = flag && data[i][j] === val && val != 0;
    }
    if (flag) {
      return true;
    }

    flag = true;
    val = data[0][i];
    for (let j = 0; j < 3; j++) {
      flag = flag && data[j][i] === val && val != 0;
    }
    if (flag) {
      return true;
    }
  }
  if (
    data[0][0] === data[1][1] &&
    data[2][2] === data[1][1] &&
    data[1][1] != " "
  ) {
    return true;
  }
  if (
    data[0][2] === data[1][1] &&
    data[2][0] === data[1][1] &&
    data[1][1] != " "
  ) {
    return true;
  }
  return false;
}

function resetData() {
  data = [...Array(3)].map((elem) => Array(3).fill(" "));
  for (row of a) {
    elem = row.getElementsByTagName("td");
    for (tdElem of elem) {
      tdElem.innerHTML = " ";
    }
  }
  win = false;
}
