import React, { useState } from 'react'

 type ContactFormPropes = {
    onAdd:(name:string , email:string , phone:string) => void ;
 }
 


const ContactForm = ({onAdd}:ContactFormPropes) => {
     const [name , setName] = useState("");
     const[email, setEmail] = useState("");
     const[phone  , setPhone] = useState("");

     const handleSubmit = (e:React.FormEvent) =>{
                e.preventDefault();

                if(name && email && phone){
                    onAdd(name , email , phone);

                    setName("");
                    setEmail("");
                    setPhone("");

                }
     }

  return (
    <>
    <form onSubmit={handleSubmit} >

        <input type="text" value={name} onChange={(e) =>  setName(e.target.value) }  placeholder='name' />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='email' />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder='phone' />

        <button type='submit' >Save Contact</button>
    </form>
    
    </>
  )
}

export default ContactForm