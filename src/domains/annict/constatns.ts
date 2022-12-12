import { AxiosRequestConfig } from 'axios';
import { Season } from './types/season';

export const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://api.annict.com/v1',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ANNICT_ACCESS_TOKEN}`,
  },
};

export const seasons = (() => {
  const oldestYear = 1990;
  const seasonNames = ['winter', 'spring', 'summer', 'autumn'];
  const seasonNameTexts = ['冬', '春', '夏', '秋'];
  const seasons: Season[] = [];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  for (let j = Math.floor((month - 1) / 3); j >= 0; j--) {
    seasons.push({
      name: `${year + 1}-${seasonNames[j]}`,
      nameText: `${year + 1}年${seasonNameTexts[j]}`,
    });
  }
  for (let i = year; i >= oldestYear; i--) {
    for (let j = 3; j >= 0; j--) {
      seasons.push({
        name: `${i}-${seasonNames[j]}`,
        nameText: `${i}年${seasonNameTexts[j]}`,
      });
    }
  }

  return seasons;
})();

export const initialSeasonIdx = 4;
