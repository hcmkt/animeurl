import { useState, useEffect } from 'react';
import axios from 'axios'
import AnimeTable, { Anime } from './AnimeTable'
import './App.css'

function App() {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);

  async function getAnimes(page: number) {
    if (!page) return;
    const response = await axios.get('https://api.annict.com/v1/works', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ANNICT_ACCESS_TOKEN}`,
      },
      params: {
        fields: 'id,title,official_site_url',
        filter_season: '2022-spring',
        page: page,
        per_page: 50,
        sort_watchers_count: 'desc',
      }
    });
    setAnimes(animes.length ? [...animes, ...response.data.works] : response.data.works);
    setPage(response.data.next_page);
  };

  useEffect(() => {
      getAnimes(page);
  }, [page]);

  return (
    <AnimeTable animes={animes}></AnimeTable>
  )
}

export default App
