export default function updatePage(pageNumber, setRecordDataForPaging) {
    fetch(`https://localhost:7143/records?PageNumber=${pageNumber}&PageSize=21`)
    .then(res => res.json())
    .then(data => setRecordDataForPaging(data))
}