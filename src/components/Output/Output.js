import React, { useState, useEffect } from 'react';
import styles from './Output.module.css';
import * as editorFormat from '../../utils/texteditorConfigs';

function Output(props) {
    const tabs = ['VSCode', 'Atom', 'Sublime Text'];
    const [currentFormat, setCurrentFormat] = useState(tabs[0]);
    const [vscodeFormat, setvscodeFormat] = useState(editorFormat.initializeVSCode());
    const [atomFormat, setAtomFormat] = useState(editorFormat.initializeAtom());
    const [sublimeFormat, setSublimeFormat] = useState(editorFormat.initializeSublime());

    function handleTabSelected(e) {
        props.manageBackgroundColor(e.target.innerHTML);
        setCurrentFormat(e.target.innerHTML);
    }

    useEffect(() => {
        setvscodeFormat(editorFormat.initializeVSCode(props.description, props.trigger, props.snippet));
        setSublimeFormat(editorFormat.initializeSublime(props.description, props.trigger, props.snippet));
        setAtomFormat(editorFormat.initializeAtom(props.description, props.trigger, props.snippet));
    }, [props.description, props.snippet, props.trigger]);

    return (
        <div className={styles.container}>
            <div className={styles.tablist}>
                    {tabs.map((tab) => <button key={tab}
                        onClick={handleTabSelected}
                        className={currentFormat === tab ? styles.active : ''}>
                            {tab}
                        </button>
                    )}
            </div>
            <div className={styles.tabcontent}>
                <pre>
                    {
                        (function (format) {
                            switch (format) {
                                case 'VSCode':
                                    return vscodeFormat;
                                case 'Atom':
                                    return atomFormat;
                                case 'Sublime Text':
                                    return sublimeFormat;
                                default:
                                    throw new Error('Wrong editor format');
                            }
                        })(currentFormat)
                    }
                </pre>
            </div>
        </div>
    )
}

export default Output;