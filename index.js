var musicians = []
var instruments = []

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
  while(i < arrFacts.length-1){
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
