import React, { useState } from 'react'
import style from '../components/Search.module.css'

const Search = (props) => {

    const { findRestaraunts, darkmode } = props

    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [genre, setGenre] = useState('77213')

    // Compiles form data into an object and uses a function passed through props to send the info up to Main component
    const submitHandler = (e) => {
        e.preventDefault();

        let submit = {
            type: type == '' ?
                'all' :
                type,

            location: location == '' ?
                'near+me' :
                location,

            genre: genre
        }

        findRestaraunts(submit)
    }

    // Renders the search form for both restaurant and movie genre to look for
    return (
        <div>
            {/* {JSON.stringify(genre)} */}
            <form onSubmit={submitHandler} className={darkmode ? style.formLight : style.formDark}>
                <label>Type of restaraunt:</label>
                <input type="text" placeholder='not required' onChange={e => { setType(e.target.value) }} value={type} className={darkmode ? style.borderDark : style.borderLight} />

                <label>Search location:</label>
                <input type="text" placeholder='zip, city, address? not required' onChange={e => { setLocation(e.target.value) }} value={location} className={darkmode ? style.borderDark : style.borderLight} />

                <label>Movie Genre:</label>
                <select onChange={e => setGenre(e.target.value)} size={5} defaultValue={77213} className={darkmode ? style.borderDark : style.borderLight}>
                    <option value="77213">Absurd Comedies</option>
                    <option value="801362">Action</option>
                    <option value="43040">Action Comedies</option>
                    <option value="1568">Action Sci-Fi & Fantasy</option>
                    <option value="43048">Action Thrillers</option>
                    <option value="3327">Alien Sci-Fi</option>
                    <option value="786708">Animated Movies</option>
                    <option value="4698">Animation</option>
                    <option value="7424">Anime</option>
                    <option value="90139">Blockbuster Movies</option>
                    <option value="1003219">Comedy Blockbusters</option>
                    <option value="5824">Crime Films</option>
                    <option value="7627">Cult films</option>
                    <option value="67673">Disney</option>
                    <option value="5763">Drama</option>
                    <option value="52858">Epics</option>
                    <option value="9744">Fantasy</option>
                    <option value="1626246">Futuristic Sci-Fi</option>
                    <option value="6197">Goofy Comedies</option>
                    <option value="27018">Heist Films</option>
                    <option value="8711">Horror Films</option>
                    <option value="7707">Independant Films</option>
                    <option value="8985">Martial Arts Films</option>
                    <option value="5962">Military Films</option>
                    <option value="26">Mockumentaries</option>
                    <option value="947">Monster Films</option>
                    <option value="13335">Musicals</option>
                    <option value="36103">Quirky Romance</option>
                    <option value="5756">Raunchy Comedies</option>
                    <option value="108533">Sci-Fi</option>
                    <option value="11559">Stand Up Comedy</option>
                    <option value="67698">Super Hero</option>
                    <option value="8933">Suspenses</option>
                </select>

                <button style={{ width: '65%', margin: 'auto', marginTop: '10px' }}>Submit</button>
            </form>
        </div>
    )
}

export default Search