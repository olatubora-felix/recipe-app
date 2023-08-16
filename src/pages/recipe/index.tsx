import { useNavigate } from "react-router-dom"
import Modal from "../../components/UI/Modal"
import { useGetCurrencyConvertion } from "../../hooks/useGetCurrencyConvertion"
import { useGetRecipeById } from "../../hooks/useGetRecipeById"
import { currencyConvert } from "../../utils/helpers"
import { useState } from 'react'
import { Spinner } from "../../components/UI/Spinner"

const RecipeDetail = () => {
  const { data, isLoading, error } = useGetRecipeById()
  const [isOpen, setIsOpen] = useState(false);
  const Navigate = useNavigate()
  const { data: exchangeRage, isLoading: exchangeLoading, error: exchangeError } = useGetCurrencyConvertion()
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = async () => {
    setIsOpen(!isOpen);
  }

  if (isLoading) return <Spinner />
  if (error) {
    return <p>Sorry Something went wrong</p>
  }

  return (
    <>
      <div>
        <button onClick={() => Navigate(-1)} className="bg-purple-700 hover:bg-purple-900 text-white py-3 px-6 mt-3 rounded-md shadow-md transition-all duration-150 ease-in-out">Back</button>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:py-12 ">
        <div className="w-full" >
          <img src={data?.recipe?.image} alt="" className="w-full h-[400px]" />
          <h2 className="font-bold text-dark text-xl my-3 md:hidden block">{data?.recipe?.label}</h2>
          <div>
            <h2 className="font-bold text-3xl text-dark my-4">Instructions</h2>
            <div>
              {
                data?.recipe?.ingredientLines?.map((instruction: string, i: number) => (
                  <div key={instruction} className="w-full">
                    <div className="flex items-center gap-4 py-4">
                      <h4 className="font-semibold text-base text-purple-800">Step {i + 1}</h4>
                      <div className="h-[0.5px] bg-gray-200 flex-1"></div>
                    </div>
                    <p className="text-sm font-normal text-gray-500">{instruction}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className=" lg:col-span-2 py-4">
          <h2 className="font-bold text-dark text-2xl md:block hidden">{data?.recipe?.label}</h2>
          <div>
            <h2 className="font-bold text-3xl text-dark my-4 capitalize">ingredient</h2>
            {data?.recipe?.ingredients?.map((ingredient: ingredientProps, i: number) => (
              <ul key={i} className="my-3">
                <li className="font-medium text-base text-gray-800">
                  {ingredient?.foodCategory}
                </li>
              </ul>
            ))}
          </div>
          <p className="font-bold md:my-4 my-6 capitalize text-purple-800 flex md:justify-end w-full">calories Count: {data?.recipe?.calories?.toFixed(2)}</p>
          <div>
            <p className="font-semibold">Toatal Price:  {currencyConvert(data?.recipe?.totalCO2Emissions, 'en-NG', 'NGN'
            )}</p>
            <button className="font-normal text-base bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-900 shadow-md my-3 md:w-[300px] w-full" onClick={handleOpen}>Click to see USD price</button>
          </div>
        </div>
        <Modal handleClose={handleClose} isOpen={isOpen} exchangeRage={exchangeRage} isLoading={exchangeLoading} error={exchangeError} />
      </div>
    </>
  )
}

interface ingredientProps {
  foodCategory: string
}

export default RecipeDetail