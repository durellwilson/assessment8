import { useState } from 'react';
import { addPlace } from '../services/placeService';

interface PlaceFormProps {
  onPlaceAdded: () => void;
}

export default function PlaceForm({ onPlaceAdded }: PlaceFormProps) {
  const [name, setName] = useState('');
  const [firstTime, setFirstTime] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPlace({ name, firstTime });
    setName('');
    setFirstTime(false);
    onPlaceAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={firstTime}
          onChange={(e) => setFirstTime(e.target.checked)}
        />
        First Time
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
