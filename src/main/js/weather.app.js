import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const rest = require('rest');

class App extends Component {
    getGeoLocation() {
        if ("geolocation" in navigator) {
            console.log('geolocation available')
            navigator.geolocation.getCurrentPosition(function(position) {
                rest('/getLocation?lat='.concat(position.coords.latitude)
                    .concat('&lon=').concat(position.coords.longitude))
                    .then(function(response) { 
                        console.log(response);
                    });
            });
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