export default function getFilteredRecords(genre, pageNumber, setRecordDataForPaging) {
    fetch(`https://localhost:7143/records/genres?PageNumber=${pageNumber}&PageSize=21&genre=${genre}`)
    .then(res => res.json())
    .then(data => setRecordDataForPaging(data))
}