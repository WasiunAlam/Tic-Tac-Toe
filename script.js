let boxes=document.querySelectorAll('.box')
let reset=document.querySelector('.reset')
 
let turno=true;

let wincondition=[
  [0,4,8],
  [0,3,6],
  [0,1,2],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]
let count=0

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    count +=1;
    if (turno) {
      box.innerText='0';
      turno= false
    } else{
      box.innerText='x'
      turno=true
    }
    box.disabled= true
    checkwinner();
    checkDraw();  
    
  })

} )

let checkwinner=() => {
  for (const pattern of wincondition) {
    let post1=boxes[pattern[0]].innerText
    let post2=boxes[pattern[1]].innerText
    let post3=boxes[pattern[2]].innerText

    if (post1 !=='' && post2 !== '' && post3 !== '') {
      if (post1==post2 && post2 ==post3) {
        document.querySelector('.result').innerText=`Winner is ${post1}`
        for (const box of boxes) {
          box.disabled= true
        }
      } 
      
    }
  }
}
let checkDraw= () => {
  if (count ===9) {
    document.querySelector('.result').innerText='This Game is a draw'
  }
}

reset.addEventListener('click',() => {
  for (const box of boxes) {
    box.innerText='';
    box.disabled= false;
    document.querySelector('.result').innerText='';
  }
  count=0
})
