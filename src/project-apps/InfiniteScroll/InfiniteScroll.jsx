import React, { useCallback, useRef, useState } from 'react'
import useBookSearch from './useBookSearch'

const InfiniteScroll = () => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const {isLoading, error, books, hasMore} = useBookSearch(query, pageNumber)

    const observer = useRef()
    const lastBookRef = useCallback(node => {
        if(isLoading) return
        if(observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber+1)
            }
        })
        if(node) {
            observer.current.observe(node)
        }
    }, [isLoading, hasMore])

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }


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
