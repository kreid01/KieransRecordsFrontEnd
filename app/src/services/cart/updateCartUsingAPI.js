export default function updateCartAPI(cartId, setCartDataFromAPI) {
    fetch(`https://localhost:7143/cart/${cartId}`)
    .then(res => res.json())
    .then(data => setCartDataFromAPI(data))
    .catch(err => console.error(err)) 
}