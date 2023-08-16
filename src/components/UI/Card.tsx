import { FC } from 'react'
import { restaurantPros } from '../../pages/restaurants'
import staticImage from '/public/restaurant.png'

export const Card: FC<restaurantPros> = ({ photos, name, vicinity }) => {
  const googleKey = import.meta.env.VITE_APP_GOOGLE_KEY
  return (
    <div className='rounded-md shadow-md bg-[#fff] w-full'>
      {
        photos?.length > 0 ? photos?.map((photo, i: number) => (
          <div key={i}>
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${googleKey}`} alt={photo.photo_reference} className="w-full" style={{ height: "300px" }} />
          </div>
        )) : <img src={staticImage} alt={name} />
      }
      <p className="font-medium text-base text-center py-3">Name: {name}</p>
      <p className="font-normal text-xs text-center py-3">Address: {vicinity}</p>
    </div>
  )
}
