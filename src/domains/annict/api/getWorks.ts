import axios, { AxiosRequestConfig } from 'axios';
import { DEFAULT_CONFIG } from '../constatns';
import { Works, isWorks } from '../types/works';

export const getWorks = async (
  filterSeason: string,
  page: number
): Promise<Works> => {
  const mergedConfig: AxiosRequestConfig = {
    ...DEFAULT_CONFIG,
    url: '/works',
    params: {
      fields: 'id,title,official_site_url',
      filter_season: filterSeason,
      page,
      per_page: 50,
      sort_watchers_count: 'desc',
    },
  };
  const response = await axios(mergedConfig);
  const works: unknown = response.data;

  if (!isWorks(works)) {
    throw Error('API type error');
  }

  return works;
};
