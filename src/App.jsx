import { useEffect, useState } from 'react';
import Episodes from './Episodes';
import Loading from './Loading';

const url = 'https://theofficeapi.dev/api/episodes'



function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [episodes, setEpisodes] = useState([]);

  const removeEpisode = (id) => {
    const newEpisodes = episodes.filter((episode) => episode.id !== id);
    setEpisodes(newEpisodes);
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const asisApi = await response.json();
      const episodes = await asisApi.results;
      setEpisodes(episodes);
      console.log(episodes)
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
  
  useEffect( ()=>{
    fetchData(); //invoke the func
  },[] );

  if(isLoading) {
    return (
      <Loading />
    )
  }
  if(episodes.length === 0 ){
    return <main>
      <div>
        <h2>No Episodes</h2>
        <div className="title-underline"></div>
        <button className='btn' onClick={() => fetchData()}> Refresh Episodes</button>
      </div>
    </main>
  }

  return (
    <main>
      <Episodes episodes={episodes} removeEpisode={removeEpisode}/>
     </main>
  )
}

export default App
