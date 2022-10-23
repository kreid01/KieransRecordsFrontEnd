import React from 'react'
import Record from './Record'

export default function Carousel(props) {

    const [current, setCurrent] = React.useState(0);
    const [secondSlide, setSecondSlide] = React.useState(1);
    const [thirdSlide, setThirdSlide] = React.useState(2)
    const length = props.records.length;
    const records = props.records

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setSecondSlide(current === length - 2 ? 0 : current === length - 1 ?
           1 :  secondSlide + 1);
         setThirdSlide(current === length - 3 ? 0 : 
            current === length - 2 ? 1 : current === length -  1 ?
           2 : thirdSlide + 1);
        const startToEndAlbum = records.shift()
        records.push(startToEndAlbum)
        console.log(current, secondSlide, thirdSlide, records)
        };  
    

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        }

    const CarouselData = records.map((record, i) => {

        const id = props.recordData.indexOf(record)

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
            <button  onClick={prevSlide}><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
            <div className='slides--container'>
                {CarouselData}
            </div>
            <button  onClick={nextSlide}><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
        </div>
  )
}