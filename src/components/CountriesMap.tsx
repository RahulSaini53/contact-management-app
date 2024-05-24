// component to show country map with covid data
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface CountryData {
  country: string;
  countryInfo: {
    _id: string;
    lat: number;
    long: number;
  };
  cases: number;
  deaths: number;
  recovered: number;
}


//fetching countries covid data
const fetchCountriesData = async (): Promise<CountryData[]> => {
  const res = await fetch('https://disease.sh/v3/covid-19/countries');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const CountriesMap: React.FC = () => {
  const { data, isLoading, error } = useQuery<CountryData[], Error>({
    queryKey: ['countriesData'],
    queryFn: fetchCountriesData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // Type assertion
  const countriesData = data as CountryData[];

  const defaultCenter: [number, number] = [20, 0];

  return (
    <div className="w-full md:w-3/4 lg:w-3/4 mx-auto relative z-0">
      <MapContainer center={defaultCenter} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countriesData.map((country) => (
          <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Cases: {country.cases}</p>
                <p>Deaths: {country.deaths}</p>
                <p>Recovered: {country.recovered}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CountriesMap;
