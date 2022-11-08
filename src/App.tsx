import AnimeTable, { Anime } from './AnimeTable'
import './App.css'

function App() {
  const animes: Anime[] = [
    {
      "id": 9250,
			"title": "リコリス・リコイル",
			"official_site_url": "https://lycoris-recoil.com"
		},
		{
			"id": 7266,
			"title": "メイドインアビス 烈日の黄金郷",
			"official_site_url": "http://miabyss.com/"
		},
		{
			"id": 8631,
			"title": "異世界おじさん",
			"official_site_url": "https://isekaiojisan.com/"
		},
		{
			"id": 9086,
			"title": "よふかしのうた",
			"official_site_url": "https://yofukashi-no-uta.com"
		},
		{
			"id": 6292,
			"title": "映画 ゆるキャン△",
			"official_site_url": "https://yurucamp.jp/cinema/"
		}
  ];

  return (
    <AnimeTable animes={animes}></AnimeTable>
  )
}

export default App
