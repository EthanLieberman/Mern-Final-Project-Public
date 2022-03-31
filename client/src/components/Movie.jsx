import React from 'react'

const Movie = (props) => {
    const {movie, darkmode} = props
    
    // Renders information on the selected movie based on the returned info from the movie API call
    return (
        <div style={darkmode? {color: 'white'}: {color: 'black'}}>
            <h3><a href={`https://www.netflix.com/watch/${movie.netflix_id}`} target={'_blank'} style={darkmode? {color: 'white'}: {color: 'black'}}>{movie.title}</a></h3>
            <p>{movie.year}</p>
            <p>Runtime: {movie.runtime.slice(0, movie.runtime.length-2) /60} Hr {movie.runtime.slice(movie.runtime.length-2)} Mins</p>
            <img src={movie.poster} alt="movie poster" width={'60%'} />
            <p>{movie.synopsis}</p>
        </div>
    )
}

export default Movie