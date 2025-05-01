import React, { useState } from 'react'
import useBookSearch from './useBookSearch'

const InfiniteScroll = () => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    useBookSearch(query, pageNumber)

    return (
        <div>
            <input type='text' onChange={handleSearch}></input>
            <div>title</div>
            <div>title</div>
            <div>Loading...</div>
            <div>Error</div>
        </div>
    )
}

export default InfiniteScroll
