import React from "react";
import { Link } from 'react-router-dom'

export default function SimilarRecords(props) {
    
    const recordData = props.recordData
    const id = props.id 
      
    const similarRecords = props.recordDataUnique.reduce((acc, record, i) => {   
        if(record !== props.recordData[id] && record.name !== props.recordData[id].name ) {
        if(record.genres.includes(
            recordData[id].genres[0] || 
            recordData[id].genres[1] || 
            recordData[id].genres[2])) {
          return acc.concat(record)
        }}
        return acc
    }, [])
  
    // eslint-disable-next-line array-callback-return
    const similarRecordsData = similarRecords.map((record, i) => {
        if (i < 6) {
        const id = recordData.indexOf(record)
        
        // eslint-disable-next-line no-unused-vars, array-callback-return
        return (
            <div className='record' id={id} key={id}>
                <Link to={`/records/${id}`}
                 onClick={window.scrollTo(0, 0)}>
                <img className='record--image featured--record'                        
                src={record.imageUrl}
                alt=''
                />
                </Link>
                <div>
                    <h3 className='record--name'>{record.name}</h3>
                    <h3 className='record--artist'>{record.artist}</h3>
                </div>
                <div id='similar-record--info--container'>
                    <p className='record--info'>{record.releaseYear}  • {record.songCount} songs</p>
                    <div className='record--buying'>
                        <p className='record--price'>£{record.price}</p>
                        <button  id='similar--record--cart' style={props.inputThemeStyles} onClick={() => props.addToCart(record, id)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            )
            }
        })
    

    return (
    <section className='similar--record--container' style={props.themeStyles}>
        <h1 style={props.themeStyles} className='page--header'>Similar Records</h1>
        <div className='similar--records' style={props.themeStyles}>
             {similarRecordsData}
        </div>
     </section> 
    )
}