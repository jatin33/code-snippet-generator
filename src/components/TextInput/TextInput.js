import React from 'react';
import styles from './TextInput.module.css';

function TextInput(props) {
    return (
        <input type="text" className={styles.base} {...props} />
    )
}

export default TextInput;