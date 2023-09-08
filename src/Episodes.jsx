import Episode from './Episode';

const Episodes = ({episodes, removeEpisode}) => {
    return <section>
        <h2 className='title'>The Office Episodes S1</h2>
        <div className="title-underline"></div>
        <div className='episodes'>
            {episodes.map((episode) => {
                console.log(episode)
                return <Episode className='single-episode' key={episode.id} {...episode} removeEpisode={removeEpisode} /> 
            })}
        </div>
    </section>
}

export default Episodes;