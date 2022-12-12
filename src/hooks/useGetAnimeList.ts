import { useEffect, useState } from 'react';
import { getWorks, seasons } from 'domains/annict';
import type { Work } from 'domains/annict';

export const useGetAnimeList = (seasonIdx: number): Work[] => {
  const [animes, setAnimes] = useState<Work[]>([]);
  const [page, setPage] = useState<number | null>(1);

  useEffect(() => {
    const load = async () => {
      if (page === null) return;
      const works = await getWorks(seasons[seasonIdx].name, page);
      setAnimes(animes.length ? [...animes, ...works.works] : works.works);
      setPage(works.next_page);
    };
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setAnimes([]);
    setPage(1);
  }, [seasonIdx]);

  return animes;
};

export default useGetAnimeList;
