export default function getRecordsForPage(pageSize, setRecordDataForPaging) {
    fetch(`https://localhost:7143/records?PageNumber=1&PageSize=${pageSize}`)
    .then(res => res.json())
    .then(data => setRecordDataForPaging(data))
}