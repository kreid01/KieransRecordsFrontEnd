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
        }

    const CarouselData = props.records.map((record, i) => {
        if(i === current ||  i - 1 === current  || i - 2 === current) {
            return <Record
            name={record.name}
            artist={record.artist}
            imageUrl={record.imageUrl}
            price={record.price}
            songCount={record.songCount}
            releaseYear={record.releaseYear}
            inputThemeStyles={record.inputThemeStyles}
            buttonFunction={props.addToCart}
            buttonText='Add to cart'/>
        }
    })

    return (
        <div className='carousel--container'>
            <button onClick={prevSlide}></button>
            <div className='slides--container'>
                {CarouselData}
            </div>
            <button onClick={nextSlide}></button>
        </div>
  )
}