import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Top 10 Anime on MyAnimeList</h1>
      <div className="background">
        <Card
          image="https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
          name="Sousou no Frieren"
          season="Fall 2023"
          rating="☆9.31"
          link="https://myanimelist.net/anime/52991/Sousou_no_Frieren"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/1208/94745.jpg"
          name="Fullmetal Alchemist: Brotherhood"
          season="Spring 2009"
          rating="☆9.10"
          link="https://myanimelist.net/anime/5114/"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/1935/127974.jpg"
          name="Steins;Gate"
          season="Spring 2011"
          rating="☆9.07"
          link="https://myanimelist.net/anime/9253/Steins_Gate"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/1517/100633.jpg"
          name="Shingeki no Kyojin Season 3 Part 2"
          season="Spring 2019"
          rating="☆9.05"
          link="https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/3/72078.jpg"
          name="Gintama°"
          season="Spring 2015"
          rating="☆9.05"
          link="https://myanimelist.net/anime/28977/"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/1337/99013.jpg"
          name="Hunter x Hunter (2011"
          season="Fall 2011"
          rating="☆9.03"
          link="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/4/50361.jpg"
          name="Gintama'"
          season="Spring 2011"
          rating="☆9.02"
          link="https://myanimelist.net/anime/9969/Gintama"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/1452/123686.jpg"
          name="Gintama Enchousen"
          season="Fall 2012"
          rating="☆9.02"
          link="https://myanimelist.net/anime/15417/Gintama__Enchousen"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/1908/135431.jpg"
          name="Bleach: Sennen Kessen-hen"
          season="Fall 2022"
          rating="☆9.00"
          link="https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen"
        />
        <Card
          image="https://cdn.myanimelist.net/images/anime/1160/122627.jpg"
          name="Kaguya-sama wa Kokurasetai: Ultra Romantic"
          season="Spring 2022"
          rating="☆8.99"
          link="https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic"
        />
      </div>
    </>
  );
}

export default App;
