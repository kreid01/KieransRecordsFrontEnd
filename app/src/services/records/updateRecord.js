import axios from 'axios'

export default async function updateRecord(record) {

    const recordDataForDatabase =  {
                "_id": `${record._id}`,
                "stockNumber": `${record.stockNumber}`,
                "format": `${record.format}`,
                "name":`${record.name}`,
                "artist": `${record.artist}`,
                "releaseYear": record.releaseYear,
                "songCount": record.songCount,
                "imageUrl": `${record.imageUrl}`,
                "genres": 
                    [`${record.genres[0]}`, `${record.genres[1]}`, `${record.genres[2]}`]
                ,
                "quantity": record.quantity,
                "price": record.price,
                "isAvailable": record.isAvailable,
                "isReservedInCart": record.isReservedInCart
        }
        
    try {
        const res = await axios.put(`https://localhost:7143/records?id=${record._id}`, recordDataForDatabase)
    } catch (err) {
        console.log(err)
    }
}