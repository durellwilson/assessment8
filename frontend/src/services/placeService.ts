import axios from 'axios';
import { Place } from '../types/Place';

export const getPlaces = async (): Promise<Place[]> => {
  const response = await axios.get('/api/places/');
  return response.data;
};

export const addPlace = async (place: Omit<Place, '_id'>): Promise<Place> => {
  const response = await axios.post('/api/places/', place);
  return response.data;
};
