import { FC, useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import AnimeTable from './AnimeTable';
import './App.css';

interface Image {
  recommended_url: string;
  facebook: { og_image_url: string };
  twitter: {
    mini_avatar_url: string;
    normal_avatar_url: string;
    bigger_avatar_url: string;
    original_avatar_url: string;
    image_url: string;
  };
}

interface Work {
  id: number;
  title: string;
  official_site_url: string;
  image: Image;
}

interface ResponseData {
  works: Work[];
  total_count: number;
  next_page: number | null;
  prev_page: number | null;
}

const App: FC = () => {
  const [animes, setAnimes] = useState<Work[]>([]);
  const [page, setPage] = useState<number | null>(1);

  const getAnimes = async (page: number | null) => {
    if (page === null) return;
    const response: AxiosResponse<ResponseData> = await axios.get(
      'https://api.annict.com/v1/works',
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ANNICT_ACCESS_TOKEN}`,
        },
        params: {
          fields: 'id,title,official_site_url',
          filter_season: '2022-spring',
          page,
          per_page: 50,
          sort_watchers_count: 'desc',
        },
      }
    );
    setAnimes(
      animes.length ? [...animes, ...response.data.works] : response.data.works
    );
    setPage(response.data.next_page);
  };

  useEffect(() => {
    void getAnimes(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return <AnimeTable animes={animes}></AnimeTable>;
};

export default App;
