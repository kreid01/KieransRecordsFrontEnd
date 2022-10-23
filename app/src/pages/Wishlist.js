import React from 'react';
import Record from '../components/UI/Record'

export default function Wishlist(props) {
       
    if(props.wishlist.length > 0) {


        const mappedData = props.wishlist.map((record, i) => {
        let id = 0

        // eslint-disable-next-line array-callback-return
        props.recordData.map((rec, i) => {
            if(record.name === rec.name) {
                id = i
            }
        })
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
                    deleteFromWishlist={props.deleteFromWishlist}
                    isFromWishlist={true}/>
                    )
            })
         
    return (
        <main className='collection--page' style={props.themeStyles}>
            <header style={props.themeStyles} className='collection--header'>
                <h1 className='page--header'>Wishlist</h1>
            </header>
            <div style={props.themeStyles} className='record--container'>
                {mappedData}
            </div>
        </main>

    )
}}