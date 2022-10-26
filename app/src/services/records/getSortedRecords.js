export default function getSortedRecords(sortBy, pageNumber, setRecordDataForPaging) {
    fetch(`https://localhost:7143/records/sort?PageNumber=${pageNumber}&PageSize=21&method=${sortBy}`)
    .then(res => res.json())
    .then(data => setRecordDataForPaging(data))
}