import axios from "axios"
import { useEffect } from "react"

export default function useBookSearch(query, pageNumber) {

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://openlibrary.org/search.json'
        })
    }, [query, pageNumber])

    return (
        <div>
            null
        </div>
    )
}
