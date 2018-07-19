const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians,intruments) {
  var array = []
  for (let y = 0; y < musicians.length; y++) {
  array.push(musicians[y]+" plays "+instruments[y])
}
return array
}


function johnLennonFacts(facts){
  array=[]
  x=0
  while (x<facts.length){
  array.push(facts[x]+"!!!")
  x=x+1
  }
return array
}
