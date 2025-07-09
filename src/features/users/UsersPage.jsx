import { useEffect, useState } from "react";
import { getUsers } from "./userApi";
import UserCard from "./components/UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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
  }, [])

  // Filter users
  useEffect(() => {
    const lower = searchTerm.toLowerCase()
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(lower)
    )
    setFiltered(results)
  }, [searchTerm, users])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          User Directory
        </h1>

        <input
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 mb-6 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />

        {/* User cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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
