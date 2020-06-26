import React from 'react';
import styles from './ContactList.module.css';
import ProprTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, id, number }) => (
      <li key={id} className={styles.contact}>
        {name}: {number}
        <button
          type="button"
          className={styles.remove_contact_btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.proprTypes = {
  contacts: ProprTypes.arrayOf(
    ProprTypes.exact({
      name: ProprTypes.string.isRequired,
      id: ProprTypes.string.isRequired,
      number: ProprTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactList;
