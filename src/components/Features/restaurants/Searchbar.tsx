
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Searchbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search !== "") {
      navigate(`/restaurants?search=${search}`)
      setSearch("")
    }
  }
  return (
    <div className="flex justify-end">
      <form className='border  flex items-center p-4 w-[300px] justify-between rounded-md shadow-md' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search For restaurants' className=' italic border-[none] outline-none flex-1' onChange={(e) => setSearch(e.target.value)} value={search} />
        <button className='text-2xl text-purple-600 opacity-40' type="submit">
          <FiSearch />
        </button>
      </form>
    </div>
  )
}
