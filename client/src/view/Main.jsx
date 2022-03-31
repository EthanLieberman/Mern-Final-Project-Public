import React, { useEffect, useState } from 'react'
import List from '../components/List'
import Map from '../components/Map'
import Search from '../components/Search'
import Movie from '../components/Movie'
import axios from 'axios'
import style from './Main.module.css'


const Main = (props) => {

    const { darkmode } = props

    const [restaraunts, setRestaraunts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [sumbitrun, setSubmitrun] = useState(false)
    const [movieload, setMovieload] = useState(false)
    const [address, setAddress] = useState('')
    const [winner, setWinner] = useState({})
    const [movie, setMovie] = useState({})



    const findRestaraunts = (submit) => {       // when submit is clicked on child componant
        console.log('from submit')

        axios.get(`http://localhost:8000/api/getData/${submit.type}/${submit.location}`)        // api call to database to retrive list of restaraunts from google places
            .then(results => {
                console.log(results.data.results)
                setRestaraunts(results.data.results)
            })
            .catch(err => console.log(err))

            setMovieload(false)     // resets ternary to render splash animation for loading movie choices

        axios.get(`http://localhost:8000/api/getMovie/${submit.genre}`)     // api call to database to retrive random movie from netflix api based on selected genre
            .then(results => {
                console.log(results.data.results)
                setMovie(results.data.results[Math.floor(Math.random() * results.data.results.length)])
            })
            .catch(err => console.log(err))

        setSubmitrun(true)      // initiates ternary to display movie loading animation while waiting for the api call to return data
    }



    useEffect(() => {       // runs once api to get restaraunt data is returned and sets an object in variable
        if (restaraunts.length != 0) {
            setWinner(restaraunts[Math.floor(Math.random() * restaraunts.length)])  // sets variable for a random restaraunt from the returned array
            console.log('test')
        }

    }, [restaraunts])



    useEffect(() => {       // runs once random restaraunt variable is loaded and has a key in it
        if (winner.hasOwnProperty('formatted_address')) {
            setAddress(winner.formatted_address)
            setLoaded(true)     // sets the ternary condition to render the map and list componants
            console.log(winner)
        }
    }, [winner])



    useEffect(() => {       // runs once the call to retrive a movie comes back and sets the movie variable
        if (movie.hasOwnProperty('title')) {
            console.log("movie loaded")
            setMovieload(true)      // initiates the ternary for the movie componant to load and replace the loading animation
            console.log(movie)
        }
        // console.log("movie not loaded yet")
    }, [movie])



    return (
        <div className={style.wrapper}>
            <div className={darkmode ? style.searchDark : style.searchLight}>
                <Search findRestaraunts={findRestaraunts} darkmode={darkmode} />
            </div>

            <div className={style.center}>
                {
                    loaded ?
                        <div>
                            <List restaraunts={restaraunts} winner={winner} darkmode={darkmode}/>
                            <Map address={address} />
                        </div>

                        : <div style={{height: '81.25vh'}}> <img src="/Splash.png" alt="splash logo" width={'75%'} style={{marginTop: '15%'}}/></div>
                }

            </div>

            <div className={darkmode ? style.movieDark : style.movieLight}>

                {
                    sumbitrun ?
                        movieload ?
                            <Movie movie={movie} darkmode={darkmode}/>
                            : <>
                                <p>Getting a movie for you</p>
                                <img src="/Reel.png" className={style.spin} />
                            </>

                        : <img src="/MovieStatic.png" alt="movie static" width={'80%'} style={{ paddingTop: '80px' }} />
                }

            </div>
        </div>
    )
}

export default Main