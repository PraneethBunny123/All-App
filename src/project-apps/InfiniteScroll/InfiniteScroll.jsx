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
        <div className="max-w-md mx-auto mt-8">
            <label className="block mb-2 font-bold text-lg">Infinite Scroll</label>
            <input 
                type='text'
                value={query}
                onChange={handleSearch}
                className="w-full p-2 border rounded mb-4"   
            />
            <ul className="space-y-2">
                {books.map((book, index) => {
                    if(books.length === index+1) {
                        return <li key={book} ref={lastBookRef}>{book}</li>
                    }else {
                        return <li key={book}>{book}</li>
                    }
                })}
            </ul>
            {isLoading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">Error</p>}
        </div>
    )
}

export default InfiniteScroll
