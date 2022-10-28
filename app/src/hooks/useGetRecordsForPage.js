import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export default function useGetRecordsForPage(query, page, isReset, setIsReset) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [records, setRecords] = useState([])
    const queryFormatted = 
    (query.sortBy.length > 1 && query.genreFilter.length > 1) ? '/genres/sorted': 
    (query.sortBy.length > 1) ? '/sort' :
    (query.genreFilter.length > 1) ? '/genres': ''

    const sendQuery = useCallback(async ()  => {
        try {
            if(isReset) {
                setRecords([])
                setIsReset(false)
            }
            await setLoading(true)
            await setError(false)
            const res = await axios.get(`https://localhost:7143/records${queryFormatted}/?PageNumber=${page}&PageSize=21&genre=${query.genreFilter}&method=${query.sortBy}`)
            setRecords((prev) => [...prev, ...res.data])
            setLoading(false)
        } catch (err) {
            setError(err)
        }
    }, [page, query])

    useEffect(() => {
        sendQuery(query)
    }, [query, sendQuery, page])
    return { loading, error, records}
}   