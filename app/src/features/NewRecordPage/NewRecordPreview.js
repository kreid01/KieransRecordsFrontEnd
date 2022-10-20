import React from 'react';

export default function NewRecordPreview(props) {

return (
<div className='preview--record--container'>
<h2 className='page--header'>Preview of Record</h2>
    <div className='preview--new--record'>
        <div className='current--record'>
            <img className='preview--record--image'                        
            src={props.newRecord.imageUrl}
            alt=''
            />
            <div className='current--record--info preview'>
                <h3 className='preview--record--name'>{props.newRecord.name}</h3>
                <h2 className='preview--record--artist'>{props.newRecord.artist}</h2>
                {props.newRecord.songCount > 1 && props.newRecord.releaseYear > 1 && <p className='preview--record--info'>{props.newRecord.releaseYear}  •  {props.newRecord.songCount} songs </p>}
                <div className='preview--record-genres'>
                    {props.newRecord.genres.join(', ')}
                </div>
                {props.newRecord.price > 1 && <p className='preview--record--price'>£{props.newRecord.price}</p>}
            </div>
        </div>
    </div>
</div>
    )
}