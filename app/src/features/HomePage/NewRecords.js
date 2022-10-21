/* eslint-disable array-callback-return */
import React from 'react'; 
import Record from '../../components/UI/Record';


export default function NewRecords(props) {

    const newRecords = props.recordData.filter(record => record.releaseYear === 2022)
    const newRecordMapped = newRecords.map((record, i) => {
        if(i < 3) {
        const id = props.recordData.indexOf(record)
        return (
            <Record
            key={id} 
            record={record}
            name={record.name}
            artist={record.artist}
            id={id}
            i={i}
            releaseYear={record.releaseYear}
            songCount={record.songCount}
            price={record.price}
            imageUrl={record.imageUrl}
            inputThemeStyles={props.inputThemeStyles}
            buttonText='Add to Cart'
            buttonFunction={props.addToCart}/>
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