export default function postCartAPI(json) {
    fetch('https://localhost:7143/cart', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },  
    body:JSON.stringify(json)})
}