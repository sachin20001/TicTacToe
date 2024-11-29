const boxes=document.querySelectorAll(".box")
const resetBtn=document.querySelector("#reset-btn")
const message=document.querySelector("#message")


console.log(boxes);

let turn=true;


for(const box of boxes)
{
    console.log(box);
    box.addEventListener("click",()=>{
        if(turn)
        {
            box.innerText="X";
            turn=!turn;
            box.disabled=true;
        }
        else{
            box.innerText="O"
            turn=!turn;
            box.disabled=true;
        }
    })
}