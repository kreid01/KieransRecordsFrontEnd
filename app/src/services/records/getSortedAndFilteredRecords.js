export default function getSortedAndFilteredRecords(genre, sortBy, pageNumber, setRecordDataForPaging) {
    fetch(`https://localhost:7143/records/genres/sorted?PageNumber=${pageNumber}&PageSize=21&method=${sortBy}&genre=${genre}`)
    .then(res => res.json())
    .then(data => setRecordDataForPaging(data))
}