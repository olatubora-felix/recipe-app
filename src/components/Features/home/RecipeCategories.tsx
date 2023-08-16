
import { Link, useLocation } from 'react-router-dom'
export const RecipeCategories = () => {
  const navigate = useLocation()
  const active = navigate?.search.split("=")[1]
  const categories = ["breakfast", "carrots", "dinner", "lunch", "fastFood", "spicy"]
  return (
    <div className="md:w-[150px] w-full py-4 overflow-hidden">
      <h1 className='w-full font-semibold leading-normal text-2xl  text-purple-800 mb-4'>Recipes</h1>
      <ul className='gap-3 flex overflow-x-auto w-full md:flex-col flex-row'>
        {categories.map(category => (
          <li key={category} className='capitalize font-medium text-base text-gray-400 mb-2'>
            <Link to={`/?category=${category}`} className={`${category === active ? "text-purple-800 font-semibold transition-all ease-in-out duration-150s" : "text-gray-400"}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
