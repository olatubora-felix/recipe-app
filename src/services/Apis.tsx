import axios from "axios"
import { getItems, getPosition } from "../utils/helpers";


const recipeKey = import.meta.env.VITE_API_KEY;
const appKey = import.meta.env.VITE_APP_APP_ID
const exchangeKey = import.meta.env.VITE_APP_EXCHANGE_KEY
const googleKey = import.meta.env.VITE_APP_GOOGLE_KEY

// Fetch Recipes from API
export const fetchRecipes = async (slug: string) => {
  const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${slug ?? "food"}&app_id=${appKey}&app_key=${recipeKey}`);
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
    const { data } = await axios.get(`https://v6.exchangerate-api.com/v6/${exchangeKey}/pair/NGN/USD/${amount ?? ""}`);
    return data
  } else {
    throw Error("Something went wrong")
  }

}

// Fetch Restaurant base on latitude and logitude 
export const fetchRestuarants = async (search: string) => {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };
  const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.latitude},${position.longitude}&radius=1500&type=${search ?? "restaurants"}&key=${googleKey}`);
  return data?.results
}


