import React from 'react'; 
import { Link } from 'react-router-dom'

export default function FeaturedRecords(props) {

    const featuredRecords = props.recordDataUnique.filter(record => 
        record.name === 'Deathconsciousness' ||
        record.name === 'Symbolic' ||
        record.name === 'The Glow Pt. 2' ||
        record.name === 'Somewhere City' ||
        record.name === 'Unknown Pleasures' ||
        record.name === 'Either/Or'
        )
    
    const featuredRecordMapped = featuredRecords.map(record => {
        const id = props.recordData.indexOf(record)
        return (
            <div className='record' id={id} key={id}>
                <Link to={`/records/${id}`}>
                <img className='featured--record'                        
                src={record.imageUrl}
                alt=''
                />
                </Link>
                <div className='new--record--details'>
                    <h3 className='new--record--name'>{record.name}</h3>
                    <h3 className='new--record--artist'>{record.artist}</h3>
                </div>
                <p className='record--info'>{record.releaseYear}  • {record.songCount} songs</p>
                <div className='record--buying'>
                    <p className='record--price'>£{record.price}</p>
                </div>
            </div>
            )
    })
    

    return (
        <section style={props.themeStyles} className='featured--records'>
        <h2 className='page--header'>Featured Records</h2>
            <div className ='featured--record--container'>
                {featuredRecordMapped}
            </div>
        </section>
    )
}