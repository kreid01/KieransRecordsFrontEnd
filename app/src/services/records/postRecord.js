export default function postRecord(newRecord, setNewRecord) {
    fetch('https://localhost:7143/records', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },  
    body:JSON.stringify(newRecord)})
    .then(res => 201)
    .then(console.log('posted successfully'))
    }
    
  