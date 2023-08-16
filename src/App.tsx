import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import Restaurants from "./pages/restaurants"
import Home from "./pages/home"
import RecipeDetail from "./pages/recipe"


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:slug" element={<RecipeDetail />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App