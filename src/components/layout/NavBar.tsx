import { Link, NavLink } from "react-router-dom"


export const NavBar = () => {
  const routes = [
    {
      name: 'Home',
      link: "/"
    },
    {
      name: "Restaurants",
      link: "/restaurants"
    }
  ]
  return (
    <nav className="py-4 flex justify-between md:items-center">
      <Link to={"/"} className="font-bold md:text-3xl text-base text-purple-900 uppercase italic">OreRecipe</Link>
      <ul className="flex items-center md:gap-4 gap-2 justify-end">
        {
          routes.map(route => (
            <li className="  " key={route.name}>
              <NavLink to={route.link} className={({ isActive, }) =>
                isActive ? "text-purple-900 font-bold md:text-xl text-base" : "text-dark font-medium md:text-lg text-base"
              }>{route.name}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
