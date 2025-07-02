import React from 'react'
import type { Contact } from '../types/contact'
import './ContactListStyle.css';
type ContactListProps = {
    contacts : Contact[];

    onDelete: (id:string) => void ;
};
const ContactList = ({contacts , onDelete}:ContactListProps) => {
  return (
    <>
    
      <ul>
        {contacts.map((contact) =>(
            <li key={contact.id}  >
                <strong> {contact.name} </strong> 
                <span> {contact.email} </span>
                <span>{contact.phone}</span>


                <button onClick={() => onDelete(contact.id)} > Delete Contact</button>
            </li>
        ))}
      </ul>
    
    </>
  )
}

export default ContactList