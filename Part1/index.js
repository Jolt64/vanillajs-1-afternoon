let holder = [];
let box0 = document.getElementById(0)
let box1 = document.getElementById(1)
let box2 = document.getElementById(2)
let box3 = document.getElementById(3)
let box4 = document.getElementById(4)
let box5 = document.getElementById(5)
let box6 = document.getElementById(6)
let box7 = document.getElementById(7)
let box8 = document.getElementById(8)

const play = val => {
  if (document.getElementById(val).innerText === "") {
    let player = document.getElementById("player");
    if (player.innerText === "X") {
      player.innerText = "O";
      holder.push("X");
    } else {
      player.innerText = "X";
      holder.push("O");
    }

    

    let IDHolder = document.getElementById(val);
    if (player.innerText === "X") {
      IDHolder.innerText = "O";
    } else {
      IDHolder.innerText = "X";
    }
  } else {
      alert("Box is Taken")
  }  
  if(holder.length > 4) {
      if(box0.innerText != '' && box0.innerText == box1.innerText && box1.innerText == box2.innerText) {
        alert(`Player ${box0.innerText} is the winner`)
    } else if(box3.innerText != '' && box3.innerText == box4.innerText && box4.innerText == box5.innerText) {
        alert(`Player ${box3.innerText} is the winner`)
    } else if(box6.innerText != '' && box6.innerText == box7.innerText && box7.innerText == box8.innerText) {
        alert(`Player ${box6.innerText} is the winner`)
    } else if(box0.innerText != '' && box0.innerText == box3.innerText && box3.innerText == box6.innerText) {
        alert(`Player ${box0.innerText} is the winner`)
    } else if(box1.innerText != '' && box1.innerText == box4.innerText && box4.innerText == box7.innerText) {
        alert(`Player ${box1.innerText} is the winner`)
    } else if(box2.innerText != '' && box2.innerText == box5.innerText && box5.innerText == box8.innerText) {
        alert(`Player ${box2.innerText} is the winner`)
    } else if(box0.innerText != '' && box0.innerText == box4.innerText && box4.innerText == box8.innerText) {
        alert(`Player ${box0.innerText} is the winner`)
    } else if(box2.innerText != '' && box2.innerText == box4.innerText && box4.innerText == box6.innerText) {
        alert(`Player ${box2.innerText} is the winner`)
    }
}


console.log(holder);
  
};
