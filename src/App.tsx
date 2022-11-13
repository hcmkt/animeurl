import { FC, useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import AnimeTable from './AnimeTable';
import ControlBar, { Season } from './ControlBar';
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

const getSeasons = () => {
  const seasons: Season[] = [];
  const seasonNames = ['winter', 'spring', 'summer', 'autumn'];
  const seasonNameTexts = ['冬', '春', '夏', '秋'];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  for (let j = Math.floor((month - 1) / 3); j >= 0; j--) {
    seasons.push({
      name: `${year + 1}-${seasonNames[j]}`,
      nameText: `${year + 1}年${seasonNameTexts[j]}`,
    });
  }
  for (let i = year; i >= 1980; i--) {
    for (let j = 3; j >= 0; j--) {
      seasons.push({
        name: `${i}-${seasonNames[j]}`,
        nameText: `${i}年${seasonNameTexts[j]}`,
      });
    }
  }

  return {
    seasonNames: seasons,
    currentSeason: 4,
  };
};

const { seasonNames, currentSeason } = getSeasons();

const App: FC = () => {
  const [animes, setAnimes] = useState<Work[]>([]);
  const [page, setPage] = useState<number | null>(1);
  const [selectedSeason, setSelectedSeason] = useState<number>(currentSeason);

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
          filter_season: seasonNames[selectedSeason].name,
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

  useEffect(() => {
    setAnimes([]);
    setPage(1);
  }, [selectedSeason]);

  return (
    <>
      <ControlBar
        seasonNames={seasonNames}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
      ></ControlBar>
      <AnimeTable animes={animes}></AnimeTable>
    </>
  );
};

export default App;
