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

//now comes the objects where ts becomes really helpful

//here we can define the objects structure just like we define the schemas in models

const user : {
  name:string,
  age:number,
  email:string
} = {
  name :"raj",
  age:34,
  email:"rah"
}

//now the ts knows what object exactly should contain



//now writing the objects type again and again is offcourse very annoying 

//so here comes the interface 

//instead of 
const user:{
  name:string,
  age:number,
  email:string
}

//we can write 
interface user {
  name:string,
  age:number,
  email:string
} //and then

const user : User = {
  name:"raj",
  age:23,
  email:"Ra"
}

//so the interface feature of ts is so gaoted that this becomes the actual reason for api development


//now declaring the functions in ts

function add( a:number , b:number){
  return a + b;
}

//this means a->number , b->number , return value -> should be a number

function greet (name:string):string{
  return 'heallo ji';
}

//arrow fxns in ts

const add = (a:number,b:number) : number => a+b;



//now comes the optional property of js 

//suppose some user have their email to sign up while some have the phone number to sign up ,so in this case while defining the structure , we will be using the ? property

interface User {
  name:string,
  age:number,
  phone?: string,
  email?:string,

}

//so now if the object has either phone number or email this will not through the error as they are optional not mandatory


//now comes the union types -- very important concept 


//so imagine an api that can either have the id as string or in format of number so it can be declared as 

let id : number|string;

//why unions are usefull - this is useful when we are calling the apis 

//can be represented as
interface user {
  id : number | string
}