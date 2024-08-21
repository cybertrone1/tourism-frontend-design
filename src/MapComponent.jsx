import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {

    const markers = [
        { position: [51.505, -0.09], title: 'Js Doe', location: 'Boarding Pass XYZ', image: 'image1.jpg' },
        { position: [48.8566, 2.3522], title: 'James Doe', location: 'Boarding Pass XYZ', image: 'image2.jpg' },
        { position: [40.7128, -74.0060], title: 'Jame Doe', location: 'Boarding Pass XYZ', image: 'image3.jpg' },
        { position: [34.0522, -118.2437], title: 'James Do', location: 'Boarding Pass XYZ', image: 'image4.jpg' }
    ]

    return ( 
        <div className="w-full h-96 mapcomponent">
            < MapContainer center={[20.0, 0.0]} zoom={2} scrollWheelZoom={false} className='h-full w-full'>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    markers.map((marker, index) => (
                        <Marker key={index} position={marker.position}>
                            <Popup>
                                <div className='text-center'>
                                    <p>{marker.title}</p>
                                    <p> {marker.location} </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
     );
}
 
export default MapComponent;