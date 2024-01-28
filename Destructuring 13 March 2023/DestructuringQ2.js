//  Q 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.

let arr = [2,3,5,6,2,5,6];

const uniqueValues = arr.filter((Element,index,array)=>{
    return array.indexOf(Element) === index; 
})
console.log(uniqueValues);