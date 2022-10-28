import axios from 'axios'

export default async function getAllRecords(setRecordData) {

    try {
        const res = await axios.get(`https://localhost:7143/records/all`)
        setRecordData(res.data)
    } catch (err) {
       console.log(err)
    }
}
