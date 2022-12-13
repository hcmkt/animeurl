import { FC } from 'react';
import { seasons } from 'domains/annict';
import useGetAnimeList from 'hooks/useGetAnimeList';
import { useParams } from 'react-router-dom';
import AnimeTable from 'components/organisms/AnimeTable';
import ControlBar from 'components/organisms/ControlBar';

const AnimeList: FC = () => {
  const { season = '' } = useParams();
  const animes = useGetAnimeList(season);
  const seasonIdx = seasons.map((s) => s.name).indexOf(season);

  return (
    <>
      <ControlBar seasonIdx={seasonIdx} />
      <AnimeTable animes={animes} />
    </>
  );
};

export default AnimeList;
