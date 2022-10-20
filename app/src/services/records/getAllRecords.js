export default function GetAllRecords(setRecordData) {
    fetch('https://localhost:7143/records/all')
    .then(res => res.json())
    .then(data => setRecordData(data))
}