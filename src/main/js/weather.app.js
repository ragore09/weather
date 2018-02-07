'use strict';

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const rest = require('rest');

class App extends Component {
    constructor(props) { 
        super(props);
    }
    
    getGeoLocation() {
        let self = this;
        if ("geolocation" in navigator) {
            console.log('geolocation available')
            navigator.geolocation.getCurrentPosition(function(position) {
                rest('/getLocation?lat='.concat(position.coords.latitude)
                    .concat('&lon=').concat(position.coords.longitude))
                    .then((response) => { 
                        let status = JSON.parse(response.entity);
                        self.showMap(status);
                    });
            });
        } else {
            console.log('geolocation not available')
        }
    }

    showMap(status) { 
        const coordinates = new google.maps.LatLng({
            lat: status.coord.lat, 
            lng: status.coord.lon
        });
        map.panTo(coordinates);
        map.setZoom(14);
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