import axios from "axios"
import { useEffect, useState } from "react"

export default function useBookSearch(query, pageNumber) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
    }, [query])

    useEffect(() => {
        setIsLoading(false)
        setError(false)

        let cancel
        axios({
            method: 'GET',
            url: 'https://openlibrary.org/search.json',
            params: {q: query, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data)
            setBooks(prevBooks => [...new Set([...prevBooks, ...res.data.docs.map(
                book => book.title
            )])])

            setHasMore(res.data.docs.length > 0)
            setIsLoading(false)
        }).catch(e => {
            if(axios.isCancel(e)) return
            setError(true)
        })

        return () => cancel()
    }, [query, pageNumber])

    return {
        isLoading, error, books, hasMore
    }
}
