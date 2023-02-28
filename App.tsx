import * as React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { Apod } from './apod';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
/*
function ApodList() {
  const [loading, setLoading] = useState(false);
  const [apods, setApods] = useState<Apod[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setApods(data.results);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setApods([]);
        setError('Error al cargar los usuarios');
      });
  }, []);

  if (loading) {
    return <div>Cargando informacion...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  // renderiza la lista de usuarios
  return (
    <ul>
      {apods.map((a) => (
        <li key={a.date}>
          {a.title} ({a.url})
        </li>
      ))}
    </ul>
  );
}
*/
