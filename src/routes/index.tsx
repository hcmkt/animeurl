import { FC, useEffect } from 'react';
import { initialSeasonName } from 'domains/annict';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AnimeList from 'components/environments/AnimeList';

const IndexRoutes: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path=":season" element={<AnimeList />} />
      <Route path="/" element={<Navigate to={initialSeasonName} replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
