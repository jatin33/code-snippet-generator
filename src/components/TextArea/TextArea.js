import React from 'react';
import styles from './TextArea.module.css';

function TextArea(props) {
    return (
        <textarea className={styles.base} {...props} />
    )
}

export default TextArea;