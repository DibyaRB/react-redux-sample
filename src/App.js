
import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelec


  return (
    <div className="App">
      <h1> Counter {counter}</h1>

      <h3> Valuable Information I shouldn't see</h3>
    </div>
  );
}

export default App;
