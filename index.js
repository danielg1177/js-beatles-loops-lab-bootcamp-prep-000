// add solution here

function theBeatlesPlay(arrayM, arrayI) {
  
  let arrayNew = []
  
  for (let i = 0; i < arrayM.length ; i++) {
    
    arrayNew.push(`${arrayM[i]} plays ${arrayI[i]}`)
  }
  
  return arrayNew
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  
  let i = 0
  
  let newArray = []
  
  while(i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
  }
  
  return newArray
}