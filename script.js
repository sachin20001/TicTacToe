const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const message = document.querySelector("#message");

console.log(boxes);

let turn = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

for (const box of boxes) {
  console.log(box);
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";   
      box.disabled = true;
    } else {
      box.innerText = "O";
      box.disabled = true;
    }
    checkWinner();
    turn = !turn;
  });
}

const checkWinner = () => {
    console.log("inside checkwinner")
    winPattern.forEach((ind)=>{
        let val1=boxes[ind[0]].innerText;
        let val2=boxes[ind[1]].innerText;
        let val3=boxes[ind[2]].innerText;
        
        console.log(val1,val2,val3);
        if(val1!="" && val1==val2 && val2==val3)
        {
            let msg="Winner is ";
            if(turn)
            {
                msg+="X";
            }
            else
            {
                msg+="O";
            }

            message.innerText=msg;
            console.log(msg);
            disableBoxes();
        }

        
    })
};

const disableBoxes=() => {
  boxes.forEach((box) => {
    box.disabled=true;
  })
}

const enableBoxes=() => {
  boxes.forEach((box) => {
    box.innerText="";
    box.disabled=false;
  })
}

resetBtn.addEventListener("click",() => {
  enableBoxes();
  message.innerText="";
})




