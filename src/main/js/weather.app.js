import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <h2>Weather App</h2>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('weatherApp')
)