import p from 'prop-types';
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: p.func,
};
function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('pai renderizou');

  return (
    <div className="App">
      <p>teste 2</p>
      <h1>c1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
