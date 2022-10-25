import React from 'react';

export default function NewRecordPreview(props) {

    let genresData = ''

    if(props.newRecord.genres.length > 0) {
    genresData = props.newRecord.genres.map((genre, i)  => {
        if(genre !== "undefined") {
        return (
         <div key={i} className="genre">{genre}</div>
        )}
    })}


return (
<div className='preview--record--container'>
<h2 className='page--header'>Preview</h2>
    <div className='preview--record'>
        <div className='record'>
            <img className='record--image'                        
            src={props.newRecord.imageUrl}
            alt=''
            />
            <div className='record--info'>
                <h3 className='record--name'>{props.newRecord.name}</h3>
                <h2 className='record--artist'>{props.newRecord.artist}</h2>
                {props.newRecord.songCount > 1 && props.newRecord.releaseYear > 1 && <p className='record--info'>{props.newRecord.releaseYear}  •  {props.newRecord.songCount} songs </p>}
                <div className='new--record--genres'>
                    {genresData}
                </div>
            </div>
        </div>
    </div>
</div>
    )
}