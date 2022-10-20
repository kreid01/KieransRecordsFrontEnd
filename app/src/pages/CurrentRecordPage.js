import{React} from 'react';
import { useParams } from 'react-router-dom'
import CurrentRecord from '../features/CurrentRecordPage/CurrentRecord'
import SimilarRecords from '../features/CurrentRecordPage/SimilarRecords';

export default function Record(props) {
   const { id } = useParams()
   const recordData = props.recordData
   if (recordData.length > 1) {       
      
    return  (
        <>
        <CurrentRecord 
        id={id}
        recordData={recordData}
        themeStyles={props.themeStyles}
        inputThemeStyles={props.inputThemeStyles}
        addToCart={props.addToCart}
        addToWishlist={props.addToWishlist}
        addToCollection={props.addToCollection}/>
        <SimilarRecords 
        id={id}
        recordDataUnique={props.recordDataUnique}
        recordData={recordData}
        themeStyles={props.themeStyles}
        addToCart={props.addToCart}
        inputThemeStyles={props.inputThemeStyles}/>
        </>
    )
}}