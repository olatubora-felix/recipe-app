import axios from "axios"
import { getItems, getPosition } from "../utils/helpers";


// Fetch Recipes from API
export const fetchRecipes = async (slug: string) => {
  const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${slug ?? "food"}&app_id=${process?.env.REACT_APP_APP_ID ?? "c008b714"}&app_key=${process?.env.REACT_APP_API_KEY ?? "7a45267f438c9361d04d467749411a79"}`);
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
    const { data } = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_KEY ?? "fe775f211305302e54a2c6a0"}/pair/NGN/USD/${amount ?? ""}`);
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
  const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.latitude},${position.longitude}&radius=1500&type=${search ?? "restaurants"}&key=${process.env.REACT_APP_GOOGLE_KEY ?? "AIzaSyChGx3uBGFm3R9aP-JzwCy5B0R_ZTMUv4E"}`);
  return data?.results
}


