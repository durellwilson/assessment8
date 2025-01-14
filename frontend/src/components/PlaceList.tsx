import { useState, useEffect } from 'react';
import { Place } from '../types/Place'; 

export default function PlaceList() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch('/api/places');
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <div>
      <h2>List of places:</h2>
      <ul>
        {places.map(place => (
          <li key={place._id}>
            <p>ID: {place._id}</p>
            <p>Name: {place.name}</p>
            <p>First Time: {place.firstTime ? 'yes' : 'no'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
