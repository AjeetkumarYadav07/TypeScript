// var a = 344 ;
// const ac = 22 ;

// alert( 'hello');

let a=25;

let nam = "Abhi";


//Array 

let marks:number[] = [80,20 ,22] ;
let fruits:string[] = ['Ajeet' , 'golu' , 'naman'];
let isDone: boolean[] =[false , true ];

console.log(marks[0]);
console.log(fruits); // "Ajeet"
console.log(marks.length); 


const arr: Array<number> = [23 ,23 ,44,33] ;
const users:Array<string> = ['kumar' , 'singh' , 'gorav'];
console.log(arr);


// objescts in TypeScript


let person: {
    name:string;
    age:number ;
    isAdmin: boolean ;
} ={
    name: "Ajeet",
    age: 24,
    isAdmin:true,

}


// Aliases (type)
type Person = {
    name: string ;
   
    age: number,
    isAdmin: boolean ;
};

let user:Person ={
    name: "Rahul",
    age: 30,
    isAdmin : false ,
}



// Interfaces 

interface User {
    name: string ;
    age : number ;
    isAdmin ? : boolean ;  // it's optional 

}


let userDetail: User = {
    name: 'Neha',
    age : 22 ,
}



//
// Functions Basic in TypeScript 


// function add(a:number , b:number): number {
//     return a+ b ;
// }

// console.log(add(2 ,3));





// Type Assertion 

const btn = document.getElementById('btn') as HTMLElement ;
const button =  <HTMLElement> document.getElementById('btn');
btn?.onclick

const img = document.getElementById('img') as HTMLImageElement ;

img.src ;

const form = document.getElementById('myform') as HTMLFormElement;

// form.onsubmit = (e) =>{
//     e.preventDefault()

//     console.log(m)
// }


interface data {
    name: string ,
    email:string ,
}

const myobj: data  ={
   name: "ake" ,
   email: "abhikw@gmai.com",
}

 




/// Utility Types 

 // Partial <Type>


//  type Cutsomer = {
//     name:string ,
//     email:string ,
//     age:number ,
//  }

//  type PartialUser  = Partial<Cutsomer> ;


 // Required  <Type>

//  type Cutsomer = {
//     name?:string ,
//    age?: number };

//    type RequiredUser = Required<User> ;



// Read Only 

// type customer = {
//     name:String ,
//     age:number ,
//     email:string
// }

// const used :Readonly<customer>  = {
//     name: "Aejt" ,
//     age: 23 ,
//     email: "ajww.gamil"
// }

// used.age = 33; // Error :  cannot assgin to 'age' becouse it's readonly proppety 




// Record <Keys , Type >


// Pick <Type , keys >

type Admin = {
     name:string , 
     age:number ,
     email:string,

}

type Adminpnel = Pick<Admin , "name" | "email" >; 



// Generics 

const fun = <T> (n:T) :T =>{
   
    return n;

}

const news = fun(33) ;
const hel = fun("sd")



