import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Main from './view/Main'
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [darkmode, setDarkmode] = useState(false)

  const modeSelect = () => {    // function called from the button in the header componant to set dark/light modes across app
    darkmode == false?    // ternary to check the current boolean and reverse it when function is called
    setDarkmode(true)
    :
    setDarkmode(false)

    console.log('darkmode is set to', darkmode)
  }


  return (
    <div className={darkmode? 'DarkApp' : 'LightApp'}>
      <Header modeSelect={modeSelect} darkmode={darkmode}/>

      <Switch>

        <Route path={'/'}>
          <Main darkmode={darkmode}/>
        </Route>


      </Switch>

      <Footer darkmode={darkmode}/>
    </div>
  );
}

export default App;
