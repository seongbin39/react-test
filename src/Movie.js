import React from 'react';

function Movie({...rest}){
    return(
        <div>
            <img src={rest.cover} alt={rest.title}></img>
            <h3>{rest.title}</h3>
            <h4>{rest.genres.join('')}</h4>
            <p>{rest.summary}</p>
        </div>
    )
}

export default Movie;