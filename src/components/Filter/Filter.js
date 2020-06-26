import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, changeFilter }) => (
  <>
    <p className={styles.filter_title}> Find contacts by name</p>
    <input type="text" value={value} onChange={changeFilter} />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
