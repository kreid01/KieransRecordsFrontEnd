import React from 'react'; 
import Carousel from '../../components/UI/Carousel';


export default function RepressedRecords(props) {

    const featuredRecords = props.recordDataUnique.filter(record => 
        record.name === 'Jane Doe' ||
        record.name === 'El jardín de los presentes' ||
        record.name === 'Relationship of Command' ||
        record.name === 'MM..FOOD' ||
        record.name === 'The Low End Theory' ||
        record.name === 'Blonde' ||
        record.name === 'E' ||
        record.name === 'Giles Corey' ||
        record.name === 'For Long Tomorrow' 
        )
    
      return (
        <section style={props.themeStyles} className='featured--records'>
        <h2 className='page--header'>Recent Represses</h2>
            <div className ='featured--record--container'>
                <Carousel 
                records={featuredRecords}
                recordData={props.recordData}
                inputThemeStyles={props.inputThemeStyles}
                addToCart={props.addToCart}/>
            </div>
        </section>
    )
}