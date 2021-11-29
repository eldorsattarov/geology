import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const styleMainMap = {
    right: 0,
    top: 0,
    width: '730px',
    height: '272px',
    borderRadius : "30px"
};
//
// const MapContainer = () => (
//
//     <YMaps>
//     <Map
// style={styleMainMap}
// defaultState={{ center: [41.308374, 69.270771], zoom: 17 }}
// >
// <Placemark geometry={[41.308374, 69.270771]} />
// </Map>
// </YMaps>
// );
// export default MapContainer;

class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={18}
                style={styleMainMap}
                // initialCenter={{lat: 41.308374, lng: 69.270771}}
                initialCenter={{lat: 41.300546, lng: 69.277165}}
            >
                {/*<Marker position={{lat: 41.308374, lng: 69.270771}}/>*/}

                    <Marker position={{lat: 41.300546, lng: 69.277165}}/>
            </Map>
        );
        // https://maps.google.com/maps?q=41.300546,69.277165&ll=41.300546,69.277165&z=16
    }
}
export default GoogleApiWrapper({
    // apiKey: "AIzaSyB9TjZ738gEUOCYu0YJSjvSu18eVFJAHkQ"
    apiKey: "AIzaSyAk8e3xGaJZy5J6nfO_m_MV2aCfBkDT_io"
})(MapContainer);
