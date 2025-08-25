import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Fix for default markers (required for react-leaflet)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
  const officePosition = [9.005401, 38.763611];

  // Detect mobile screen width
  const isMobile = window.innerWidth <= 768;
  const mapHeight = isMobile ? '250px' : '500px';

  return (
    <div
      style={{
        width: '100%',
        height: mapHeight,
        borderRadius: '8px',
        overflow: 'hidden',
      }}
      id="map"
    >
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
              <h3 style={{ margin: '0 0 8px 0' }}>Eagle Properties Marketing agency</h3>
              <p style={{ margin: 0 }}>
                Gerji BMA plaza location<br />Addis Ababa, Ethiopia
              </p>
              <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
                📞 09 43 94 54 56
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;