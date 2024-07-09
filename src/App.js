import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';
import Form from './components/Form';

const App = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="animated-text">
          <ReactTypingEffect
            text={['魔技 Magi']}
            speed={100}
            eraseDelay={1000}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key}>{char}</span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </div>
      </div>
      <div className="right-side">
        <Form />
      </div>
    </div>
  );
}

export default App;
