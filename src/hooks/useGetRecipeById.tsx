
import {
  useQuery,
} from '@tanstack/react-query'
import { getRecipeById } from '../services/Apis'


export const useGetRecipeById = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['recipe'],
    queryFn: getRecipeById
  })
  return {
    data,
    isLoading,
    error
  }
}
