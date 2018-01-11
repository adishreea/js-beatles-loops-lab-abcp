var musicians = []
var instruments = []
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function theBeatlesPlay(musicians, instruments){
  var arr = []
  
  for (var i = 0; i < musicians.length; i++){
    arr[i] = musicians[i] + " plays " + instruments[i]
  }
  return arr
}

function johnLennonFacts(arrFacts){
  var arr = []
  var i = 0
  while(i < arrFacts.length){
    arr[i] = arrFacts[i] + "!!!"
    i++
  }
}


function iLoveTheBeatles(num){
  var arr = []
  var str = "I love the Beatles!"
  do{
    arr.push(str)
    num++
  } while(num < 15);
  return arr
}
