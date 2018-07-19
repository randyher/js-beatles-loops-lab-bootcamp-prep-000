const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians,intruments) {
  var array = []
  for (let y = 0; y < musicians.length; y++) {
  array.push(musicians[y]+" plays the "+instruments[y])
}
return array
}