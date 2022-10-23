import React from 'react';

export default function NewRecordPreview(props) {

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
                <div className='-record-genres'>
                    {props.newRecord.genres.join(', ')}
                </div>
                {props.newRecord.price > 1 && <p className='record--price'>£{props.newRecord.price}</p>}
            </div>
        </div>
    </div>
</div>
    )
}