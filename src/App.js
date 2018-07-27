import React, { Component } from 'react';
import Register from './components/Register';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route exact path='/' component = {Register}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;


{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p> */}