import { useState } from 'react';
import PlaceList from './components/PlaceList';
import PlaceForm from './components/PlaceForm';

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handlePlaceAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      <h1>Places App</h1>
      <PlaceForm onPlaceAdded={handlePlaceAdded} />
      <PlaceList refreshKey={refreshKey} />
    </div>
  );
}

