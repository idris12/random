
let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
     let result = num * num
     return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)


/// challenge Area

let ftoc = function (num) {
    let celcius = (num -32) * 5 / 9
    return celcius
}

let tempone = ftoc(32)
let temptwo= ftoc(68)

console.log(tempone)
console.log(temptwo)