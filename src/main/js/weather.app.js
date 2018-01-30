import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    getGeoLocation() {
        if ("geolocation" in navigator) {
            console.log('geolocation available')
        } else {
            console.log('geolocation not available')
        }
    }

    render() {
        return (
            <div>
                {this.getGeoLocation()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('weatherApp')
)