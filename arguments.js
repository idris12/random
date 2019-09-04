// let add = function (a, b, c) {
//      return a + b + c
// }

// let result = add(10, 1, 5)
// console.log(result)


/// Default arguments

// let getScoreText = function (name = 'Anonymous', score = 0) {
//     return 'Name: ' + name + ' - Score: ' + score

// }

//let scoreText = getScoreText(undefined , 99)
//console.log(scoreText)


//// challenge

let tip = function (total, tipPercent = .2) {
       let finalTip = total * tipPercent
       return 'Your tip is $' + finalTip
}

let tipCalculator = tip(1000)
console.log(tipCalculator)


let sum = function(a, b) {
   return a + b
}

let result = sum(20, 60)
console.log(result)
