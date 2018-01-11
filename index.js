var musicians = []
var instruments = []

function theBeatlesPlay(musicians, instruments){
  var arr = []
  
  for (var i = 0; i < musicians.length; i++){
    musicians[i] = "John Lennon plays guitar"
    arr[i] = musicians[i]
  }
  return arr
}

function johnLennonFacts(arrFacts){
  
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
