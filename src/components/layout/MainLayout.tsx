
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Outlet } from "react-router-dom"


export const MainLayout = () => {
  return (
    <main className='container mx-auto overflow-hidden'>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}


