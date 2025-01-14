import PlaceList from './components/PlaceList';
import PlaceForm from './components/PlaceForm';
import './App.css';

function App() {
  const handlePlaceAdded = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Places App</h1>
      <PlaceForm onPlaceAdded={handlePlaceAdded} />
      <PlaceList />
    </div>
  );
}

export default App;
