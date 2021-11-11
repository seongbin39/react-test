import React from 'react';

function Movie({title, genres, small_cover_image, summary}){
    return(
        <div>
            <img src={small_cover_image} alt={title}></img>
            <h3>{title}</h3>
            <h4>{genres.join('')}</h4>
            <p>{summary}</p>
        </div>
    )
}

export default Movie;