// Type
export interface Teacher {
    id:number ;
    name:string ;
    subject: "Business" | "English" | "Economics" | "Math" ;
    qualification: "MBA" | "MA" | "PHD"  ;
}

// Data
export const teachers:Teacher[] = [
    {id:1 , name:"Mrs. Sumita " , subject:"Business" , qualification:"MBA"},
    {id:2 , name:"Mr. Ajay Mishra" , subject:"English" , qualification:"MA"},
    {id:3 , name:"Miss. Sania Sharma" , subject:"Economics" , qualification:"MA"},
    {id:4 , name:"Mr.  Kumar Aditya" , subject:"Math" , qualification:"PHD"},
]