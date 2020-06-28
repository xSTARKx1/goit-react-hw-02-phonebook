import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    <Contact contacts={contacts} onDeleteContact={onDeleteContact} />
  </ul>
);

export default ContactList;
