require('../scss/main.scss')

'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div className="AppContainer">
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))