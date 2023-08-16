
import { fetchCurrency } from '../services/Apis'
import { useQuery } from '@tanstack/react-query'
export const useGetCurrencyConvertion = () => {

  // const [cureentAmount, setCurrentAmount] = useState(0)
  const { isLoading, error, data } = useQuery({
    queryKey: ['currency'],
    queryFn: fetchCurrency
  })
  return {
    isLoading,
    error,
    data,
  }
}
