import React from "react";
import Carousel from "../../components/UI/Carousel";

export default function SimilarRecords(props) {
    
    const recordData = props.recordData
    const recordDataUnique = props.recordDataUnique
    const id = props.id 
    const similarRecords = []
   
     recordDataUnique.filter(record => {
        recordData[id].genres.map(genre => {
            if(record.genres.includes(genre)) {
                similarRecords.push(record)
            }
        })
    })
    
    const recordsForCarousel = similarRecords.reduce((acc, rec) => {
        if(!acc.find(u => u.name === rec.name)) {
            acc.push(rec)
        }
        return acc
      }, [])
   
    return (
    <section className='similar--record--container' style={props.themeStyles}>
        <h1 style={props.themeStyles} className='page--header'>Similar Records</h1>
        <div className='similar--records' style={props.themeStyles}>
        <Carousel 
            records={recordsForCarousel}
            recordData={props.recordData}
            inputThemeStyles={props.inputThemeStyles}
            addToCart={props.addToCart}/>
        </div>
     </section> 
    )
}