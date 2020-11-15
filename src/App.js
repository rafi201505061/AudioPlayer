import './App.css';
// import Card from './Components/Card';
// import Home from './Components/Home';
// import AudioPlayer from './Components/AudioPlayer';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import { Provider } from './Context/SongContext';
// import { Provider as ViewportProvider } from './Context/ViewportContext';
import { LoginScreen } from './screens/LoginScreen';


function App() {
  return (
    <LoginScreen />

    // <ViewportProvider>
    //   <Provider>
    //     <div className="App">
    //       <BrowserRouter>
    //         <Switch>
    //           <Route component={AudioPlayer} exact path='/' />
    //           <Route component={Card} exact path='/musicplayer' />
    //         </Switch>
    //       </BrowserRouter>

    //     </div>
    //   </Provider>
    // </ViewportProvider>


  );
}

export default App;
