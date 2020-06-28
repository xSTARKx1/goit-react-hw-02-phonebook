import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const Contact = ({ contacts, onDeleteContact }) =>
  contacts.map(({ name, id, number }) => (
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
  ));

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Contact;
