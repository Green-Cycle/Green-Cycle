import './Maps.css';
import { React, useState } from 'react';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAR8MnZUPqxn04n5tCtWYMwU_UjLpDWnWo',
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedMarkerAddress, setSelectedMarkerAddress] = useState(null);
  const markers = [
    { lat: -23.586206, lng: -46.632914 },
    { lat: -23.590631, lng: -46.638272 },
    { lat: -23.590392, lng: -46.630073 },
    { lat: -23.588098, lng: -46.636687 },
    { lat: -23.590205, lng: -46.634277 },
    { lat: -23.589079, lng: -46.631787 },
    { lat: -23.58595, lng: -46.631717 },
    { lat: -23.588548, lng: -46.636085 },
    { lat: -23.590579, lng: -46.635285 },
    { lat: -23.587079, lng: -46.635785 },
  ];

  const onMarkerClick = async (marker) => {
    setSelectedMarker(marker);

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${marker.lat},${marker.lng}&key=AIzaSyAR8MnZUPqxn04n5tCtWYMwU_UjLpDWnWo`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setSelectedMarkerAddress(data.results[0].formatted_address);
      } else {
        setSelectedMarkerAddress('Endereço não encontrado');
      }
    } catch (error) {
      console.error('Erro ao obter o endereço:', error);
      setSelectedMarkerAddress('Erro ao obter o endereço');
    }
  };

  const onCloseInfoWindow = () => {
    setSelectedMarker(null);
    setSelectedMarkerAddress(null);
  };

  const position = { lat: -23.587, lng: -46.635 };
  return (
    <div className='maps__container'>
      <div className='maps__info'>
        <div className='maps__text'>
          <img src='/assets/marker.svg' alt='ícone de marcação' />
          <h1 className='maps__title'>PONTOS DE COLETA</h1>
        </div>
        <div className='maps__text-container'>
          <p className='maps__subtitle'>
            Descubra os pontos de coleta dos nossos parceiros e desfrute dos
            benefícios exclusivos do nosso programa de incentivo à reciclagem.
          </p>
          <p className='maps__subtitle'>
            Ao entregar seus materiais recicláveis em um de nossos pontos de
            coleta, não só você contribui para o meio ambiente, mas também
            garante descontos em todo o nosso site.
          </p>
          <p className='maps__subtitle'>
            Junte-se a nós na jornada rumo a um planeta mais sustentável
            enquanto economiza em suas compras online.
          </p>
        </div>
        <p className='maps__subtitle'>
          Encontre um ponto de coleta perto de você:
        </p>
      </div>
      <div className='maps'>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={position}
            zoom={18}
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={{
                  url: './assets/logo_small.svg',
                }}
                onClick={() => onMarkerClick(marker)}
              />
            ))}
            {selectedMarker && (
              <InfoWindow
                position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                onCloseClick={onCloseInfoWindow}
              >
                <div>
                  <h2>Endereço:</h2>
                  <p>{selectedMarkerAddress}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Maps;
