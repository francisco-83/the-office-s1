import { useState } from "react";

const Episode = ({id, title, seriesEpisodeNumber, summary, airDate, removeEpisode }) => {

    const [readMore, setReadMore] = useState(false);

    return <article className="single-episode">
        <div className="tour-info">
        <h5>{title}</h5>
        <p>Episode # {seriesEpisodeNumber}</p>
        <p>Aired: {airDate}</p>
        <p>{readMore ? summary : `${summary.substring(0,200)}...`} 
        <button className="info-btn" onClick={()=> setReadMore(!readMore)}> {readMore ? 'show less' : 'read more'} </button>
        </p>
        <button type='button' className="delete-btn btn-block btn" onClick={() => removeEpisode(id)}>Remove Episode</button>
        </div>
    </article>
}

export default Episode;