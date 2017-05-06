require('../scss/main.scss')

'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div className="AppContainer">
                <h1>Hello <span>World!</span></h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))