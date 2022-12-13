import { useEffect, useState } from 'react';
import { getWorks } from 'domains/annict';
import type { Work } from 'domains/annict';

export const useGetAnimeList = (season: string): Work[] => {
  const [animes, setAnimes] = useState<Work[]>([]);
  const [page, setPage] = useState<number | null>(1);

  useEffect(() => {
    const load = async () => {
      if (page === null) return;
      try {
        const works = await getWorks(season, page);
        setAnimes(animes.length ? [...animes, ...works.works] : works.works);
        setPage(works.next_page);
      } catch (err) {
        throw new Error(`season '${season}' not exists`);
      }
    };
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setAnimes([]);
    setPage(1);
  }, [season]);

  return animes;
};

export default useGetAnimeList;
