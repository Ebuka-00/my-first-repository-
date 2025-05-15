let numbers = [12, 67, 45, 89, 23, 51, 38, 94];
let Greater = []
let less = []
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 50) {
        Greater.push(numbers[i])}
    else {
    less.push(numbers[i])
}
}
console.log('Greater or equal to 50', Greater)

console.log('Less than 50',less)