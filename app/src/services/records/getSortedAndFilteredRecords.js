export default function getSortedAndFilteredRecords(genre, sortBy, pageSize, setRecordDataForPaging) {
    fetch(`https://localhost:7143/records/genres/sorted?PageNumber=1&PageSize=${pageSize}&genre=${genre}&method=${sortBy}`)
    .then(res => res.json())
    .then(data => setRecordDataForPaging(data))
}