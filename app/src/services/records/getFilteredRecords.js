export default function getFilteredRecords(genre, pageSize, setRecordDataForPaging) {
    fetch(`https://localhost:7143/records/genres?PageNumber=1&PageSize=${pageSize}&genre=${genre}`)
    .then(res => res.json())
    .then(data => setRecordDataForPaging(data))
}