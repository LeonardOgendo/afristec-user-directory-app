import { useEffect, useState } from "react";
import { FaHistory, FaStar } from 'react-icons/fa';

import { getUsers } from "./userApi";
import { useUserContext } from "./userContext";
import UserCard from "./components/UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { recentSearches, addRecentSearch, favorites } = useUserContext();

  const [view, setView] = useState("all");

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers()
        setUsers(data)
        setFiltered(data)
      } catch (err) {
        console.error("Failed to fetch users:", err)
      }
    }

    fetchUsers()
  }, []);

  // Filter users
  useEffect(() => {
    let filteredResults = []
    
    // all users/ recent-searches & favorites 
    if (view === "recent") {
      filteredResults = users.filter((user) =>
        recentSearches.some((term) =>
          user.name.toLowerCase().includes(term.toLowerCase())
        )
      )
    } else if (view === "favorites") {
      filteredResults = users.filter((user) => favorites.includes(user.id))
    } else if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase()

      filteredResults = users.filter((user) =>
        user.name.toLowerCase().includes(lower)
      )

      if (searchTerm.trim().length > 2 && filteredResults.length > 0) {
        addRecentSearch(searchTerm)
      }
    } else {
      filteredResults = users
    }

    setFiltered(filteredResults)
  }, [searchTerm, users, view, favorites, recentSearches])


  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap sm:items-center gap-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 w-full sm:w-auto sm:mr-0">
            Users Directory
          </h3>
          
          {view==="all" ?  
            <button onClick={() => setView("recent")} className="sm:ml-[20%] w-[1/2] sm:w-[200px] bg-[#e65100] text-white flex items-center px-4 py-[5px] rounded mb-3 hover:bg-[#cc4b00] cursor-pointer">
              <FaHistory className="mr-2" /> Recent Searches
            </button>

          : <button onClick={() => setView("all")} className="sm:ml-[20%] w-[1/2] sm:w-[200px] bg-[#e65100] text-white flex items-center px-4 py-[5px] rounded mb-3 hover:bg-[#cc4b00] cursor-pointer">
              <FaHistory className="mr-2" /> All Users
            </button> 
          }

          <button onClick={() => setView("favorites")} className="w-[1/2] sm:w-[200px] bg-[#e65100] ml-4 text-white flex items-center px-4 py-[5px] rounded mb-3 hover:bg-[#cc4b00] cursor-pointer">
            <FaStar className="mr-2" /> Favorites
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}

          className="w-[200px] text-[0.9rem] mt-4 sm:mt-0 px-4 py-1 mb-6 rounded border border-[#444] focus:outline-none  dark:text-white"
        />
     
        {/* User cards */}
        <div className="grid border border-[#444] p-2 rounded-md gap-6 sm:grid-cols-2 md:grid-cols-3 h-[68vh] overflow-y-scroll user-scroll">
          {filtered.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            No users found.
          </p>
        )}
      </div>
    </div>
  )
}

export default UsersPage;
