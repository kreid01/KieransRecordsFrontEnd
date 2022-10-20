import React from 'react';
import { Link  } from 'react-router-dom'

export default function Collection(props) {
       
    if(props.collection.length > 0) {


        const mappedData = props.collection.map((record, i) => {
        let id = 0

        // eslint-disable-next-line array-callback-return
        props.recordData.map((rec, i) => {
            if(record.name === rec.name) {
                id = i
            }
        })
            return (
                    <div className='record' id={id} key={i}>
                        <Link to={`/records/${id}`}>
                        <img className='record--image'                        
                        src={record.imageUrl}
                        alt='radiohead'
                        />
                        </Link>
                        <div className='record--details'>
                            <h3 className='record--name'>{record.name}</h3>
                            <h3 className='record--artist'>{record.artist}</h3>
                        </div>
                        <p className='record--info'>{record.releaseYear}  • 
                        {record.songCount} songs</p>
                            <div className='record--buying'>
                                <p className='record--price'>£{record.price}</p>
                                <button className='delete--button'style={props.inputThemeStyles} onClick={() => props.deleteFromCollection(i)}>Delete</button>
                        </div>
                    </div>
                )
            })
         
    return (
        <main className='collection--page' style={props.themeStyles}>
            <header style={props.themeStyles} className='collection--header'>
                <h1 className='page--header'>Collection</h1>
            </header>
            <div style={props.themeStyles} className='record--container'>
                {mappedData}
            </div>
        </main>

    )
}}