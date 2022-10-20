/* eslint-disable array-callback-return */
import React from 'react'; 
import { Link } from 'react-router-dom'


export default function NewRecords(props) {

    const newRecords = props.recordData.filter(record => record.releaseYear === 2022)
    const newRecordMapped = newRecords.map((record, i) => {
        if(i < 3) {
        const id = props.recordData.indexOf(record)
        return (
            <div className='new--record'  key={id}>
                <div className='record' id={id}>
                    <Link to={`/records/${id}`}>
                    <img className='new--record--image'                        
                    src={record.imageUrl}
                    alt={record.name}
                    />
                    </Link>
                    <div className='new--record--details'>
                        <h3 className='new--record--name'>{record.name}</h3>
                        <h3 className='new--record--artist'>{record.artist}</h3>
                    </div>
                    <p className='new--record--info'>{record.releaseYear}  • {record.songCount} songs</p>
                    <div className='new--record--buying'>
                        <p className='record--price'>£{record.price}</p>
                        <button style={props.inputThemeStyles} onClick={() => props.addToCart(record, id)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            )
        }
    })

    return (
        <section className='new--records' style={props.themeStyles}>
        <h2 style={props.themeStyles} className='page--header'>New Records</h2>
            <div style={props.themeStyles} className ='new--record--container'>
                {newRecordMapped}
            </div>
        </section>
    )
}