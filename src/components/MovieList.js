import React from 'react'
import MovieCard from './MovieCard';

function MovieList(props) {
    let {film}=props;
    return (
        <div className='listContainer'>
            {film.map(el=><MovieCard movie={el}/>)           }
        </div>
    )
}

export default MovieList
