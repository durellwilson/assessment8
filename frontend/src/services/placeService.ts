import axios from 'axios';
import { Place } from '../types/Place';

const BASE_URL = '/api';

// Function to get all places
export const getPlaces = async (): Promise<Place[]> => {
  const response = await axios.get<Place[]>(`${BASE_URL}/places`);
  return response.data;
};

// Function to add a new place
export const addPlace = async (place: { name: string; firstTime: boolean }): Promise<Place> => {
  const response = await axios.post<Place>(`${BASE_URL}/places`, place);
  return response.data;
};