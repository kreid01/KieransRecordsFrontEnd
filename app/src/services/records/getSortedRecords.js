export default function getSortedRecords(sortBy, pageSize, setRecordDataForPaging) {
    fetch(`https://localhost:7143/records/sort?method=${sortBy}&PageNumber=1&PageSize=${pageSize}`)
    .then(res => res.json())
    .then(data => setRecordDataForPaging(data))
}