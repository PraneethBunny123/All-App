import ReactQueryDemo from './ReactQueryDemo'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const ReactQuery = () => {
  return (
     <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} />
       <ReactQueryDemo />
    </QueryClientProvider>
  )
}

export default ReactQuery