var musicians = []
var instruments = []

function theBeatlesPlay(musicians, instruments){
  var arr = []
   
  for (var i = 0; i < musicians.length; i++){
    arr[i] = musicians[i] + " plays " + instruments[i]
  }
  return arr
}

function johnLennonFacts(facts){
  var arr = []
  var i = 0
  
  while(i < facts.length){
    arr[i] = facts[i] + "!!!"
    i++
  }
  return arr
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
