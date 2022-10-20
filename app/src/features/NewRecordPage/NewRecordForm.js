import React from 'react';

export default function NewRecordForm(props) {
    
    const genreOptions = 
    <>
    <option value="0">Select genre:</option>
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
    </>

    return (
            <div>
            <h1 className='page--header'>New Record</h1>
            <form>
                <div className="form-group">
                    <input 
                    type='text' 
                    style={props.inputThemeStyles}
                    placeholder='Record Title'
                    name='name'
                    for='name'
                    value={props.newRecord.name.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    data-valmsg-for="name" 
                    data-valmsg-replace="true"
                    data-val-required="Name is required." 
                    data-val="true" 
                    />
                    <input 
                    style={props.inputThemeStyles}
                    for='artist'
                    type='text' 
                    name='artist'
                    placeholder='Record Artist'
                    value={props.newRecord.artist.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    data-valmsg-for="artist" 
                    data-valmsg-replace="true"
                    data-val-required="Artist is required." 
                    data-val="true" 
                    />
                    <input 
                     style={props.inputThemeStyles}
                    for='imagegUrl'
                    type='text' 
                    name='imageUrl'
                    placeholder='Record Image URL'
                    data-val="true"
                    value={props.newRecord.imageUrl.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    data-valmsg-for="artist" 
                    data-valmsg-replace="true"
                    data-val-regex="Image URL is invalid"
                    data-val-regex-pattern="/(https?:\/\/.*\.(?: png|jpg))/i"
                    data-val-required="Image URL is required."
                    />
                    <input 
                     style={props.inputThemeStyles}
                    type='number' 
                    name='releaseYear'
                    for='releaseYear'
                    placeholder='Record Release Year'
                    value={props.newRecord.releaseYear.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    data-valmsg-for="releaseYear" 
                    data-valmsg-replace="true"
                    data-val="true"
                    data-val-required="Release Year is required."
                    data-val-range-max="2030"
                    data-val-range-min="1940"
                    data-val-range="Release Year is outwith the range"
                    />
                    <input 
                     style={props.inputThemeStyles}
                    type='number' 
                    placeholder='Record Song Count'
                    name='songCount'
                    data-val="true"
                    fpr='songCount'
                    value={props.newRecord.songCount.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    data-val-range-max="40"
                    data-val-range-min="1"
                    data-valmsg-for="soungCount" 
                    data-valmsg-replace="true"
                    data-val-range="Song Count is outwith the range"
                    data-val-required="Song count is required."
                    />
                    <input
                     style={props.inputThemeStyles} 
                    type='decimal' 
                    placeholder='Record Price'
                    name='price'
                    data-val="true"
                    for='price'
                    value={props.newRecord.price.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    data-valmsg-for="price" 
                    data-valmsg-replace="true"
                    data-val-required="Price is required."
                    data-val-range-max="200"
                    data-val-range-min="1"
                    data-val-range="Song Count is outwith the range"
                    />
                    <div className='genre--selectors'>
                    <select 
                     style={props.inputThemeStyles}
                    type='text' 
                    placeholder='Record Genre'
                    name='genres'
                    value={props.newRecord.genres.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}>
                        {genreOptions}
                    </select>                
                    <select 
                     style={props.inputThemeStyles}
                    type='text' 
                    placeholder='Record Genre'
                    name='genres'
                    value={props.newRecord.genres.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}>
                        {genreOptions}
                    </select>
                    <select 
                     style={props.inputThemeStyles}
                    type='text' 
                    placeholder='Record Genre'
                    name='genres'
                    value={props.newRecord.genres.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}>
                        {genreOptions}
                    </select>
                    </div>
                    <button 
                     style={props.inputThemeStyles}
                     className='submit--button'
                     
                      value="Submit" onClick={() => props.postRecord(props.newRecord, props.setNewRecord)}>Submit Record</button> 
                    <div className='data--val--msg' data-valmsg-summary="true">
                    </div>
                </div>
            </form>
     </div>
     )
}