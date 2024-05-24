// Component to handle apis

import axios from 'axios';
import { Component } from 'react';

const BASE_URL = 'https://disease.sh/v3/covid-19';

//function to fetch global covid data
export const fetchGlobalData = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};

// function to fetch countries covid data
export const fetchCountriesData = async () => {
  const response = await axios.get(`${BASE_URL}/countries`);
  return response.data;
};

export const fetchHistoricalData = async () => {
  const response = await axios.get(`${BASE_URL}/historical/all?lastdays=all`);
  return response.data;
};
