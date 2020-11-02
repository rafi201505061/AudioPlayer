import './App.css';
import Card from './Components/Card';
import Home from './Components/Home';
import { Link, Switch, Route } from 'react-router-dom';
import { Provider } from './Context/SongContext';


function App() {
  return (
    <Provider>
      <div className="App">
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Card} exact path='/musicplayer' />
        </Switch>
      </div>
    </Provider>

  );
}

export default App;
