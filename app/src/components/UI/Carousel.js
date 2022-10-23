import React from 'react'
import Record from './Record'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(props) {

    const records = props.records

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
      }]}

    const CarouselData = records.map((record, i) => {

        const id = props.recordData.indexOf(record)

           
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
            )
    })

    return (
        <div className='carousel'>
            <Slider  {...settings}>
                {CarouselData}
            </Slider>
        </div>
  )
}