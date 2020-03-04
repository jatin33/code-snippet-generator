import React from 'react';
import styles from './TextInput.module.css';

function TextInput(props) {
    return (
        <input className={styles.base} {...props} />
    )
}

export default TextInput;