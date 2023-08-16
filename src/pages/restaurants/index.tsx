import { Searchbar } from "../../components/Features/restaurants/Searchbar"
import CustomBanner from "../../components/UI/CustomBanner"
import { useGetRestaurants } from "../../hooks/useGetRestaurants"

import { Spinner } from "../../components/UI/Spinner"
import { Card } from "../../components/UI/Card"

const Restaurants = () => {
  const { data: restaurants, isLoading, error } = useGetRestaurants()
  if (error) {
    return <p>Sorry Something went wrong</p>
  }

  return (
    <>
      <CustomBanner className="restaurant__banner-overlay md:h-[500px] h-[200px] my-6" title="You Hungry?" subTitle="Search For Restaurant near your area" />
      <section className="py-12">

        <Searchbar />
        {isLoading && <Spinner />}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 py-4">
          {
            restaurants?.map((restaurant: restaurantPros) => (
              <Card {...restaurant} key={restaurant.place_id} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Restaurants

export type restaurantPros = {
  name: string,
  vicinity: string,
  place_id: string
  photos: {
    photo_reference: string
  }[]
}