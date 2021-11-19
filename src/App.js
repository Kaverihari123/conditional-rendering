import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    // let authBtn
    // if (isLoggedIn === true) {
    // authBtn = <button type="button">Logout</button>
    // } else {
    // authBtn = <button type="button">Login</button>
    // }

    return (
      <div className="container">
        <Welcome />
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
