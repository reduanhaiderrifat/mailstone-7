const numbers = [34,45,56,67,7]
const student = {
    name: 'rifat',
    age:23,
    subjects:'english'
}
const about = `my name is ${student.name} age of ${student.age}`
// templete string  
console.log(student['age'])
numbers.push(34,45,5,6,677)
const num = numbers
const num1 =[...num]
num.push(43)
console.log(numbers)
console.log(num1)