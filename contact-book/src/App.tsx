import { useState } from 'react'

import './App.css'
import ContactForm from './components/ContactForm'
import type { Contact } from './types/contact'

function App() {
   const [Contacts , setContacts] = useState<Contact[]> ([]);

 
  // add contact funtion 

  const addContact =(name:string , email:string , phone:string) =>{
    const newContact:Contact = {
         
      id:Date.now().toString() ,
      name,
      email,
      phone
    };

    setContacts([...Contacts , newContact]);
  };


  return (
    <>
       
         <h1> My Contact</h1>

        <ContactForm onAdd={addContact} />
       
    </>
  )
}

export default App
