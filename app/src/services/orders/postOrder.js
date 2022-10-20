export default function postOrder(cart, formData, linkToken) {
    const orderDetails = []
    cart.cartContents.map(record => {
        return (
           orderDetails.push({name: record.name, id: record.id, price: `${record.price}`})
        )
    })
    const currentTime = new Date()
    const json = {
        "id": `${cart.id}`,
        "customerId": `${linkToken}`,
        "orderContents": orderDetails,
        "timeOfOrder": `${currentTime}`,
        "isShippied": false,
        "deliveryAddress": {
            "firstName": `${formData.firstName}`,
            "secondName": `${formData.secondName}`,
            "email": `${formData.email}`,
            "phoneNumber": formData.phoneNumber,
            "addressFirstLine": `${formData.addressFirstLine}`,
            "addressSecondLine": `${formData.addressSecondLine}`,
            "postcode": `${formData.postcode}`
        }
      }
    fetch('https://localhost:7143/order', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },  
    body:JSON.stringify(json)})
}