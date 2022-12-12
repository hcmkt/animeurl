import { FC, useState } from 'react';
import { initialSeasonIdx } from 'domains/annict';
import useGetAnimeList from 'hooks/useGetAnimeList';
import AnimeTable from 'components/organisms/AnimeTable';
import ControlBar from 'components/organisms/ControlBar';

const AnimeList: FC = () => {
  const [seasonIdx, setSeasonIdx] = useState<number>(initialSeasonIdx);
  const animes = useGetAnimeList(seasonIdx);

  return (
    <>
      <ControlBar
        seasonIdx={seasonIdx}
        setSeasonIdx={setSeasonIdx}
      ></ControlBar>
      <AnimeTable animes={animes}></AnimeTable>
    </>
  );
};

export default AnimeList;
