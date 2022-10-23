import React from 'react';
import FeaturedRecords from '../features/HomePage/FeaturedRecords';
import NewRecords from '../features/HomePage/NewRecords';
import RepressedRecords from '../features/HomePage/RepressedRecords';

export default function Home(props) {

// eslint-disable-next-line array-callback-return

    return (
        <main>
            <NewRecords 
            themeStyles={props.themeStyles}
            inputThemeStyles={props.inputThemeStyles}
            recordData={props.recordData}
            addToCart={props.addToCart}/>
            <FeaturedRecords
            addToCart={props.addToCart}
            recordDataUnique={props.recordDataUnique} 
            themeStyles={props.themeStyles}
            inputThemeStyles={props.inputThemeStyles}
            recordData={props.recordData}/>    
            <RepressedRecords
            addToCart={props.addToCart}
            recordDataUnique={props.recordDataUnique} 
            themeStyles={props.themeStyles}
            inputThemeStyles={props.inputThemeStyles}
            recordData={props.recordData}/>  
        </main>
    )
}