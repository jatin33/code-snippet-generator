import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Input from './components/Input/Input';
import Output from './components/Output/Output';

function App() {
  const [description, setDescription] = useState('');
  const [trigger, setTrigger] = useState('');
  const [snippet, setSnippet] = useState('');
  const [backgroundTheme, setBackgroundTheme] = useState('VSCode');

  function handleDescription(value) {
    setDescription(value);
  }

  function handleTrigger(value) {
    setTrigger(value);
  }

  function handleSnippet(value) {
    setSnippet(value);
  }

  useEffect(() => {
    handleBackgroundChange(backgroundTheme);
  });

  function handleBackgroundChange(value) {
    setBackgroundTheme(value);
    switch (value) {
      case 'VSCode':
        document.body.style.backgroundColor = '#588BAE';
        break;
      case 'Sublime Text':
        document.body.style.backgroundColor = '#4b4b4b';
        break;
      case 'Atom':
        document.body.style.backgroundColor = '#71EEB8';
        break;
      default:
        break;
    }
  }
  return (
    <>
      <h1 style={{ color: 'floralwhite' }}>Code Snippet Generator</h1>
      <div className={styles.App}>
        <Input manageDescription={handleDescription}
          manageTrigger={handleTrigger}
          manageSnippet={handleSnippet}
          trigger={trigger}
          description={description}
          snippet={snippet} />
        <Output snippet={snippet}
          trigger={trigger}
          description={description}
          manageBackgroundColor={handleBackgroundChange} />
      </div>
    </>
  );
}

export default App;
