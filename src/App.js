// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate - executa toda vez que o component atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  //componentDidMount - executa 1x (UMA VEZ)
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // //componentWillUmont - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('c1:', counter, 'c2:', counter2);
  }, [counter, counter2]);

  // const [reverse, setReverse] = useState(false);
  // const [counter, setCounter] = useState(0);
  // const reverseClass = reverse ? 'reverse' : '';

  // const handleClick = () => {
  //   setReverse((reverse) => !reverse);
  // };

  // const handleIncrement = () => {
  //   setCounter((counter) => counter + 1);
  // };

  return (
    <div className="App">
      <p>teste 2</p>
      <h1>
        c1: {counter} c2: {counter2}{' '}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

    //     <h1>Contador: {counter}</h1>

    //     <button type="button" onClick={handleClick}>
    //       reverse {reverseClass}
    //     </button>

    //     <p>
    //       <button type="button" onClick={handleIncrement}>
    //         increment {counter}
    //       </button>
    //     </p>
    //   </header>
    // </div>
  );
}

// class App extends Component {
//   state = {
//       reverse: false,
//     };

//   handleClick() {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//           <button type="button" onClick={this.handleClick}>
//             reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
