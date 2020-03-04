import React from 'react';
import styles from './Input.module.css';

function Input(props) {
    function handleDescription(e) {
        props.manageDescription(e.target.value);
    }

    function handleTrigger(e) {
        props.manageTrigger(e.target.value);
    }

    function handleSnippet(e) {
        props.manageSnippet(e.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.userinfo}>
                <input type="text"
                    placeholder='Description...'
                    onChange={handleDescription}
                    value={props.description} />
                <input type="text"
                    placeholder='Trigger'
                    onChange={handleTrigger}
                    value={props.trigger} />
            </div>
            <textarea onChange={handleSnippet}
                placeholder={props.snippet} />
        </div>
    )
}

export default Input;