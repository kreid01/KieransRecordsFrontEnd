import axios from 'axios'

export default async function postRecord(newRecord) {

    try {
        const res = await axios.post(`https://localhost:7143/records`, newRecord)
        console.log('posted', res.data)
    } catch (err) {
      console.log(err)
    }
}
