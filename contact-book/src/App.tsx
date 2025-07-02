import { useState } from 'react'

import './App.css'
import ContactForm from './components/ContactForm'
import type { Contact } from './types/contact'
import ContactList from './components/ContactList';

function App() {
 
    // create state to save information 
   const [contacts , setContacts] =  useState<Contact[]>([]) ;


    // add contact function 
    const addContact = (name:string , email:string , phone:string) =>{
      const  newContact: Contact ={

        id: Date.now().toString() ,
        name,
        email ,
        phone,
      };

      setContacts([...contacts , newContact]);

    };


    // function for deleteContact
    const deleteContact = (id:string) =>{
      setContacts(contacts.filter((contact) => contact.id !== id));
      
    };

  return (
    <>
       
         <h1> My Contact</h1>

        <ContactForm  onAdd={addContact} />

        <ContactList  contacts={contacts} onDelete={deleteContact} />
       
    </>
  )
}

export default App
