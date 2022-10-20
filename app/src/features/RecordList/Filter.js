import React from 'react';
import { Link } from 'react-router-dom'

export default function Filter(props) {
    return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className='filter--container'> 
       <select 
       style={props.inputThemeStyles}
       className='display--sort--selector'
        onChange={(e) => props.changeSortBy(e)}>
        <option value="Price >">Price Acending</option>
        <option value="Price <">Price Decending</option>
        <option value="ReleaseYear >">Release Year Acending</option>
        <option value="ReleaseYear <">Release Year Decending</option>
        <option value="Artist >">Artist Acending</option>
        <option value="Artist <">Artist Decending</option>
        <option value="Record Name >">Record Name Acending</option>
        <option value="Record Name <">Record Name Decending</option>
        </select>
        <select 
        onChange={(e) => props.selectGenre(e)}
        className='filter--select'
        name='genreSelector'
        style={props.inputThemeStyles}
        value={props.genreFilter.value}>
        <option value="0">All Records</option>
        <option value="Art Rock">Art Rock</option>
        <option value="Alternative Rock">Alternative Rock</option>
        <option value="Pop Rock">Pop Rock</option>
        <option value="Hard Rock">Hard Rock</option>
        <option value="Glam Rock">Glam Rock</option>
        <option value="Progressive Rock">Progressive Rock</option>
        <option value="Symphonic Rock">Symphonic Rock</option>
        <option value="Post-Rock">Post-Rock</option>
        <option value="Blues Rock">Blues Rock</option>
        <option value="Experimental Rock">Experimental Rock</option>
        <option value="Folk Rock">Folk Rock</option>
        <option value="Psychedelic Rock">Psychedelic Rock</option>
        <option value="Space Rock">Space Rock</option>
        <option value="Jazz Rock">Jazz Rock</option>
        <option value="Funk Rock">Funk Rock</option>
        <option value="Shoegaze">Shoegaze</option>
        <option value="Slowcore">Slowcore</option>
        <option value="Drone">Drone</option>
        <option value="Noise Rock">Noise Rock</option>
        <option value="Concious Hip Hop">Concious Hip Hop</option>
        <option value="West Coast Hip Hop">West Coast Hip Hop</option>
        <option value="East Coast Hip Hop">East Coast Hip Hop</option>
        <option value="Southern Hip Hop">Southern Hip Hop</option>
        <option value="Experimental Hip Hop">Experimental Hip Hop</option>
        <option value="Industrial Hip Hop">Industrial Hip Hop</option>
        <option value="Trap">Trap</option>
        <option value="Cloud Rap">Cloud Rap</option>
        <option value="Abstract Hip Hop">Abstract Hip Hop</option>
        <option value="Instrumental Hip Hop">Instrumental Hip Hop</option>
        <option value="Trip Hop">Trip Hop</option>
        <option value="Plunderphonics">Plunderphonics</option>
        <option value="Hardcore Hop Hop">Hardcore Hip Hop</option>
        <option value="Jazz Rap">Jazz Rap</option>
        <option value="Pop Rap">Pop Rap</option>
        <option value="Boom Bap">Boom Bap</option>
        <option value="Neo-Soul">Neo-Soul</option>
        <option value="Funk">Funk</option>
        <option value="Contemporary R&B">Contemporary R&B</option>
        <option value="Alternative R&B">Alternative R&B</option>
        <option value="New Wave">New Wave</option>
        <option value="Post-Punk">Post-Punk</option>
        <option value="Ska">Ska</option>
        <option value="Gothic-Rock">Gothic-Rock</option>
        <option value="Colwave">Coldwave</option>
        <option value="Proto-Punk">Proto-Punk</option>
        <option value="Art-Punk">Art-Punk</option>
        <option value="Post-Punk Revival">Post-Punk Revival</option>
        <option value="Dance Punk">Dance Punk</option>
        <option value="Indie Folk">Indie Folk</option>
        <option value="Indie Rock">Indie Rock</option>
        <option value="Psychedelic Folk">Psychedelic Folk</option>
        <option value="Singer-Songwriter">Singer-Songwriter</option>
        <option value="Lo-Fi / Slacker Rock">Lo-Fi / Slacker Rock</option>
        <option value="Midwest Emo">Midwest Emo</option>
        <option value="Emo">Emo</option>
        <option value="Post-Hardcore">Post-Hardcore</option>
        <option value="Math Rock">Math Rock</option>
        <option value="Avant-Prog">Avant-Prog</option>
        <option value="Chamber Pop">Chamber Pop</option>
        <option value="Psychedelic Pop">Psychedelic Pop</option>
        <option value="Noise Pop">Noise Pop</option>
        <option value="Alternative Pop">Alternative Pop</option>
        <option value="Ambient Pop">Ambient Pop</option>
        <option value="Art Pop">Art Pop</option>
        <option value="Baroque Pop">Baroque Pop</option>
        <option value="Dream Pop">Dream Pop</option>
        <option value="Synthpop">Synthpop</option>
        <option value="Heavy Metal">Heavy Metal</option>
        <option value="Thrash Metal">Thrash Metal</option>
        <option value="echnical Death Metal">Technical Death Metal</option>
        <option value="Progressive Metal">Progressive Metal</option>
        <option value="Alternative Metal">Alternative Metal</option>
        <option value="Metalcore">Metalcore</option>
        <option value="Mathcore">Mathcore</option>
        <option value="Hardcore Punk">Hardcore Punk</option>
        <option value="Punk Rock">Punk Rock</option>
        <option value="Avante-Garde Jazz">Anarcho-Punk</option>
        <option value="Sludge Metal">Sludge Metal</option>
        <option value="Atmospheric Sludge Metal">Atmospheric Sludge Metal</option>
        <option value="Black Metal">Black Metal</option>
        <option value="Symphonic Black Metal">Symphonic Black Metal</option>
        <option value="Spiritual Jazz">Spiritual Jazz</option>
        <option value="Avante-Garde Jazz">Avante-Garde Jazz</option>
        <option value="Jazz-Fusion">Jazz-Fusion</option>
        <option value="Cool Jazz">Cool Jazz</option>
        <option value="Modal Jazz">Modal Jazz</option>
        <option value="Ambient">Ambient</option>
        <option value="Electronic">Electronic</option>
        <option value="IDM">IDM</option>
        <option value="Downbeat">Downtempo</option>
        <option value="Ambient Techno">Ambient Techno</option>
        </select>
        <div className='search--container'>
            <input
                className='search--input' 
                style={props.inputThemeStyles}
                type='text'
                value={props.searchParams} 
                onChange={(e) => props.changeSearchParams(e)}
                />
            <Link to ='/searchresults'>
                <button 
                style={props.inputThemeStyles}
                    id='search--button'>
                    Search
                </button>
            </Link>
            <button 
            className='reset--button' 
            style={props.inputThemeStyles}
            onClick={props.resetFilters}>Reset Filters</button>
        </div>
    </div>
    )
}