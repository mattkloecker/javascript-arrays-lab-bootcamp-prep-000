const app = "I don't do much."
//start
var kittens=["Milo", "Otis", "Garfield"];

//Destructively Append Kitten 'Ralph'
function destructivelyAppendKitten(name){
  kittens.push(name)
}

//Destructively Prepend Kitten 'Bob'
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

//Destructively Remove Last Kitten
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

//Destructively Remove First Kitten
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

//Append Kitten to end of Array and Return Array unmodified
function appendKitten(name){
  var morekittens = [...kittens, name]
  return morekittens

}
