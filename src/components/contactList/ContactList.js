import React from 'react';
import Contact from './Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.contact}>
        <Contact
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;
