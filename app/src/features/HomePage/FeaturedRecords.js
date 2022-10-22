import React from 'react'; 
import Carousel from '../../components/UI/Carousel';


export default function FeaturedRecords(props) {

    const featuredRecords = props.recordDataUnique.filter(record => 
        record.name === 'Deathconsciousness' ||
        record.name === 'Symbolic' ||
        record.name === 'The Glow Pt. 2' ||
        record.name === 'Somewhere City' ||
        record.name === 'Unknown Pleasures' ||
        record.name === 'Either/Or'
        )
    
      return (
        <section style={props.themeStyles} className='featured--records'>
        <h2 className='page--header'>Featured Records</h2>
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