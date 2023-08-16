import { useNavigate } from "react-router-dom"
import { recipeType } from "./RecipeList"
import { FC } from 'react'
import { setItems } from "../../../../utils/helpers"
import { Fade } from "react-awesome-reveal";
export const RecipeItem: FC<recipeType> = ({ recipe, _links }) => {
  const Navigate = useNavigate()
  const redirect = () => {
    if (recipe?.label) {
      Navigate(`/recipe/${recipe?.label}`)
      setItems("getRecipeById", _links?.self?.href)
      setItems("amount", recipe?.totalCO2Emissions)
    }
  }
  return (
    <Fade cascade>
      <div className="w-full h-[250px] relative group cursor-pointer rounded-md shadow-lg" onClick={redirect}>
        <p className="absolute bottom-[2%] left-0 text-center w-full group-hover:bg-white h-[35px] grid place-content-center z-50 group-hover:text-purple-800 text-white group-hover:font-bold">{recipe.label}</p>
        <img src={recipe.image} alt={recipe.label} className="w-full  object-cover h-full rounded-md" />
        <div className="gradient h-full w-full absolute top-0 left-0 z-30"></div>
      </div>
    </Fade>
  )

}
