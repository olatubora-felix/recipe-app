
import { RecipeCategories } from "../../components/Features/home/RecipeCategories"
import { RecipeList } from "../../components/Features/home/Recipes/RecipeList"
import CustomBanner from "../../components/UI/CustomBanner"




const Home = () => {


  return (
    <section>
      <CustomBanner className="home__banner-overlay md:h-[300px] h-[200px] md:my-12 my-6" title="You Hungry?" subTitle="Try These And You'll Remember Me" />
      <div className="flex gap-6 md:flex-row flex-col">
        <RecipeCategories />
        <RecipeList />
      </div>
    </section>
  )
}

export default Home