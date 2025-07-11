// Type
 export interface Complaint {
    id: number ;
    title:string ;
    studentdepartment : string  ;
    complaint : string ;
 }

 export const complaints: Complaint[] = [
    {id:1 , title:"Water issue" , studentdepartment:"Arts" , complaint:"A water coller is not working properly"},
    {id:2 , title:"Fan issue" , studentdepartment:"Commerce" , complaint:"A Fan coller is not working properly"},
    {id:3 , title:"Facqility Issue " , studentdepartment:"Arts" , complaint:"We need to change facilty "},
    {id:4 , title:"Class Room Issue " , studentdepartment:"Commerce" , complaint:"Our classrom Board has benn Broken "},
    {id:5 , title:" Bad behaivor's  " , studentdepartment:"Commerce" , complaint:"Our classrom Board has benn Broken "}
 ]
