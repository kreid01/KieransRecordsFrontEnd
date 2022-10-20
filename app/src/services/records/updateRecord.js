export default function updateRecord(record) {
    const recordDataForDatabase =  {
                "_id": `${record._id}`,
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
            fetch(`https://localhost:7143/records?id=${record._id}`, { 
            method: 'PUT',headers: { 'Content-Type': 'application/json' },  
            body:JSON.stringify(recordDataForDatabase)})
}