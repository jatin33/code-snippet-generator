import React from 'react';
import styles from './Input.module.css';
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';

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
                <TextInput placeholder='Description...'
                    onChange={handleDescription}
                    value={props.description} />
                <TextInput placeholder='Trigger'
                    onChange={handleTrigger}
                    value={props.trigger} />
            </div>
            <TextArea placeholder={'Put your Snippet here...'}
                onChange={handleSnippet}
                value={props.snippet} />
        </div>
    )
}

export default Input;