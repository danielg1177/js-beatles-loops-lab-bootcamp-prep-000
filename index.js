// add solution here

function theBeatlesPlay(arrayM, arrayI) {
  
  const arrayNew = []
  
  for (i = 0; i < arrayM.length ; i++) {
    
    arrayNew.push(`${arrayM[i]} plays ${arrayI[i]}`)
  }
  
  return arrayNew
}