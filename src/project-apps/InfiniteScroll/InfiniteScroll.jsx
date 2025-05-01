import React, { useState } from 'react'
import useBookSearch from './useBookSearch'

const InfiniteScroll = () => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    const {isLoading, error, books, hasMore} = useBookSearch(query, pageNumber)

    return (
        <div>
            <label>Infinite Scroll</label>
            <input type='text' onChange={handleSearch}></input>
            <ul>
                {books.map(book => (
                    <li key={book}>{book}</li>
                ))}
            </ul>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error</p>}
        </div>
    )
}

export default InfiniteScroll
