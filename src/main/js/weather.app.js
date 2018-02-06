'use strict';

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const rest = require('rest');

class App extends Component {
    reallocateMap(status) {
        const coordinates = new google.maps.LatLng({
            lat: status.coord.lat, 
            lng: status.coord.lon
        });
        map.panTo(coordinates);
        map.setZoom(17);
    }

    getGeoLocation() {
        if ("geolocation" in navigator) {
            console.log('geolocation available')
            navigator.geolocation.getCurrentPosition(function(position) {
                rest('/getLocation?lat='.concat(position.coords.latitude)
                    .concat('&lon=').concat(position.coords.longitude))
                    .then(function(response) { 
                        let status = JSON.parse(response.entity);
                        reallocateMap(status);
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