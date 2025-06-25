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

