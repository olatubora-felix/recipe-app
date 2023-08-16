import Skeleton from "react-loading-skeleton"
import { useGetRecipe } from "../../../../hooks/useGetRecipe"
import { RecipeItem } from "./RecipeItem"
import { Spinner } from "../../../UI/Spinner"
import Empty from "../../../UI/Empty"


export const RecipeList = () => {
  const { data, isLoading, error } = useGetRecipe()
  if (isLoading) return <Spinner />
  if (error) {
    return <p>Sorry Something went wrong</p>
  }
  return (
    <div className=" grid md:grid-cols-3 grid-cols-1 w-full gap-6 py-4">
      {data?.length > 0 ? data?.slice(0, 10).map((list: recipeType, i: number) => (
        <RecipeItem key={i} {...list} /> || <Skeleton count={10} />
      )) : <Empty />}
    </div>
  )
}


export type recipeType = {
  recipe: {
    label: string,
    image: string,
    totalCO2Emissions: number
  },
  _links?: {
    self: {
      href: string
    }

  }
}