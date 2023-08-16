import axios from "axios"
import { getItems, getPosition } from "../utils/helpers";


// Fetch Recipes from API
export const fetchRecipes = async (slug: string) => {
  const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${slug ?? "food"}&app_id=${process?.env.REACT_APP_APP_ID}&app_key=${process?.env.REACT_APP_API_KEY}`);
  return data?.hits
}

// Get Recipe by Id
export const getRecipeById = async () => {
  const url = getItems("getRecipeById")
  if (url) {
    const { data } = await axios.get(url);
    return data
  } else {
    throw Error("Something went wrong")
  }
}

// Fetch Currency API
export const fetchCurrency = async () => {
  const amount = getItems("amount")
  if (amount) {
    const { data } = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_KEY}/pair/NGN/USD/${amount ?? ""}`);
    return data
  } else {
    throw Error("Something went wrong")
  }

}

// Fetch Restaurant base on latitude and logitude 
export const fetchRestuarants = async (search: string) => {
  const positionObj: positionObjProps = await getPosition();
  const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${positionObj?.coords.latitude},${positionObj?.coords.longitude}&radius=1500&type=${search ?? "restaurants"}&key=${process.env.REACT_APP_GOOGLE_KEY}`);
  return data?.results
}



interface positionObjProps {
  coords: {
    latitude: number,
    longitude: number
  }
}
