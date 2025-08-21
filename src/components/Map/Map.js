import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers (required for react-leaflet)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const OfficeMap = () => {
  // Replace with your office coordinates
  // To get coordinates: right-click on Google Maps -> "What's here?"
  const officePosition = [ 9.005401, 38.763611]; // [latitude, longitude]
  
  return (
    <div style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
      <MapContainer
        center={officePosition}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={officePosition}>
          <Popup>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 8px 0' }}>Our Office</h3>
              <p style={{ margin: 0 }}>123 Business Street<br />City, State 12345</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
                📞 (123) 456-7890
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OfficeMap;