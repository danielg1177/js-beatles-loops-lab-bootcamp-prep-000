// add solution here

function theBeatlesPlay(arrayM, arrayI) {
  
  let empty = []
  
  for (i = 0; i < arrayM.length ; i++) {
    
    empty.push(`${arrayM[i]} plays ${arrayI[i]}`)
  }
  
  return empty
}