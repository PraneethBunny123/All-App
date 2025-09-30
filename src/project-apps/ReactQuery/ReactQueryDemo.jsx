import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useState } from "react";

const ReactQueryDemo = () => {
    const [pageNumber,setPageNumber]=useState(0);

  const fetchPostsList=async (pageNumber)=>{
       try {
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${pageNumber}&_limit=5`);
        return response.data;
       } catch (error) {
         throw new Error("Fetching posts failed: " + error.message);
       }
  }

  const {isLoading,isError,data,error,isFetching}=useQuery({
    queryKey:['posts',pageNumber],
    queryFn:()=>fetchPostsList(pageNumber)
  })
   
  if(isLoading){
    return <p>Loading....</p>
  }

  if(isError){
    return <p>Error... {error.message}</p>
  }

  if(isFetching) {
      return <p>Updating...</p>
    } 

    // Note: React Query's main purpose is to reduce boilerplate for fetching and rendering data, while automatically handling caching.  
    // You can see the cached data in the TanStack React Query DevTools under the Queries tab.  
    // When data is not in the cache, React Query fetches it and shows a loading state.  
    // If the data is already cached, it displays the cached data instantly without refetching.

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
        {/* List of posts */}
        <div className="space-y-3">
            {data?.map((item) => (
            <div 
                key={item.id} 
                className="p-3 bg-gray-100 rounded hover:bg-gray-200 transition"
            >
                {item.title}
            </div>
            ))}
        </div>

        {/* Pagination buttons */}
        <div className="flex justify-between items-center mt-6">
            <button 
            disabled={pageNumber === 0} 
            onClick={() => setPageNumber(prev => prev - 5)}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition"
            >
            Back
            </button>

            <p className="font-semibold text-gray-700">{pageNumber / 5 + 1}</p>

            <button 
            onClick={() => setPageNumber(prev => prev + 5)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
            Next
            </button>
        </div>
    </div>

  )
}

export default ReactQueryDemo