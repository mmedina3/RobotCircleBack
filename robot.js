let u = 0;
let d = 0;
let l = 0;
let r = 0;

function judgeCircle(moves){

}

const judgeCircle = (moves) => {
    let movesArray = moves.split("");
  for (let i=0; i< movesArray.length; i++){
      if (movesArray[i] == "U"){
          U++
      }
      if(movesArray[i] == "D"){
          D++
      }
      if(movesArray[i] == "L"){
        L++
    }
    if(movesArray[i] == "R"){
        R++
    }
    if(U==D && R==L){
        return true 
    } else {
        return false
    }
  }
}

  judgeCircle("AD");