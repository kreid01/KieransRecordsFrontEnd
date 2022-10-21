import React from 'react'
import Record from './Record'

export default function Carousel(props) {

    const [current, setCurrent] = React.useState(0);
    const length = props.records.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        };  

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current)
        }

    const CarouselData = props.records.map((record, i) => {

        const id = props.recordData.indexOf(record)

       let secondSlide = current + 1
       let thirdSlide = current + 2
        if(current === length) {
        secondSlide = current - length 
        thirdSlide = current - length +3
       }
       if(current === length - 1) {
        secondSlide = current - length + 1
        thirdSlide =  current - length + 2
       }
        if(i === current ||  i  === secondSlide || i === thirdSlide) {
            return (
            <Record
            deleteFromWishlist={props.deleteFromWishlist}
            id={id}
            key={i}
            name={record.name}
            artist={record.artist}
            imageUrl={record.imageUrl}
            price={record.price}
            songCount={record.songCount}
            releaseYear={record.releaseYear}
            inputThemeStyles={props.inputThemeStyles}
            addToCart={props.addToCart}
            record={record}
            isFromWishlist={props.isFromWishlist}
            iFromCollection={props.isFromCollection}
            deleteFromCollection={props.deleteFromCollection}/>
            )}
    })

    return (
        <div className='carousel--container'>
            <button style={props.inputThemeStyles} onClick={prevSlide}><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
            <div className='slides--container'>
                {CarouselData}
            </div>
            <button style={props.inputThemeStyles} onClick={nextSlide}><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
        </div>
  )
}