import React, { useState } from 'react'


// taking deatils as a props
 type ContactFormProps = {
   onAdd: (name:string , email:string , phone:string) => void ;
 };


  const ContactForm = ({onAdd}:ContactFormProps) => {
   
  // using useState taking data from user's 

    const[name , setName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");

   
    // to handle the For submit 

  const handleSubmit = (e: React.FormEvent) =>{
             e.preventDefault() ;



             // Phome validation : only digits , length between 10-14 

             const cleanPhone = phone.replace(/\D/g, ""); // remove non charater digits
             if(cleanPhone.length < 10 || cleanPhone.length >14 ) {
              alert("Phone number must be between 10 and 13 digits.");

              return ;
             }
             if(name && email && phone.trim() ){

              onAdd(name, email , phone.trim());

              setName("");
              setEmail("");
              setPhone("");

             }
    };
  return (
     <>
      
      <form  onSubmit={handleSubmit}>
        <input required type="text" value={name}  onChange={(e) => setName(e.target.value) } placeholder='name' />
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
        <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='number' />

        <button type='submit'>Add Contact</button>
      </form>
     
     </>
  )
}

export default ContactForm