import {
  useQuery,
} from '@tanstack/react-query'
import { fetchRestuarants } from '../services/Apis'
import { useLocation } from 'react-router-dom'


export const useGetRestaurants = () => {
  const navigate = useLocation()
  const search = navigate?.search.split("=")[1]
  const { isLoading, error, data } = useQuery({
    queryKey: ['restaurants', search],
    queryFn: () => fetchRestuarants(search)
  })




  return {
    data,
    isLoading,
    error
  }
}
