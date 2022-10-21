import React from "react";
import Carousel from "../../components/UI/Carousel";

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
        if (i < 1) {
        
        // eslint-disable-next-line no-unused-vars, array-callback-return
        return (
            <Carousel 
            records={similarRecords}
            recordData={props.recordData}
            inputThemeStyles={props.inputThemeStyles}
            addToCart={props.addToCart}/>
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