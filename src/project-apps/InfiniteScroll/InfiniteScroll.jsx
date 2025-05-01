import React, { useRef, useState } from 'react'
import useBookSearch from './useBookSearch'

const InfiniteScroll = () => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const lastBookRef = useRef()

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    const {isLoading, error, books, hasMore} = useBookSearch(query, pageNumber)

    return (
        <div>
            <label>Infinite Scroll</label>
            <input type='text' value={query} onChange={handleSearch}></input>
            <ul>
                {books.map((book, index) => {
                    if(books.length === index+1) {
                        return <li key={book} ref={lastBookRef}>{book}</li>
                    }else {
                        return <li key={book}>{book}</li>
                    }
                })}
            </ul>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error</p>}
        </div>
    )
}

export default InfiniteScroll
