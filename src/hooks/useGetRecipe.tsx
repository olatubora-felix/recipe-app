import {
  useQuery,
} from '@tanstack/react-query'
import { fetchRecipes } from '../services/Apis'
import { useLocation } from 'react-router-dom'

export const useGetRecipe = () => {
  const navigate = useLocation()
  const slug = navigate?.search.split("=")[1]
  const { isLoading, error, data } = useQuery({
    queryKey: ['recipes', slug],
    queryFn: () => fetchRecipes(slug)
  })
  return {
    data,
    isLoading,
    error
  }
}
