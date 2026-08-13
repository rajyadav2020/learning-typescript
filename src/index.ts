//so the type script variables are defined with their types itself whether they are numbers,string

let nam: string = "raj";
let isstudent: boolean = true;


//defining the strings

let username: string = "rajkumarhere";


//defining the numbers

let population :number = 20;

//now comes the type inference

//under this we dont need to explicitly write the type

//like\
let age : number = 20;
 
//this above can also be written as 
let age = 20 //here actually typescript automatically understands that age is offcourse a number , this is called the type inference



//now coming to the const vs let

//in js it is like 
const position = 10
position = 21 // works

//but in ts things change 
//the typescript works on top of js normall let and const 


//now declaring the arrays

//in js const numbers = [1,2,3,4]

//ts can represent this as 
const numbers: number[] = [1,2,3,4]; //this means that numbers is an array containing the numbers


//strings array
const names: string[] = [
  "raj",
  "amit",
  "rahul"
];

//boooleans array
const values : boolean[] = [
  true,
  false,
  true
]