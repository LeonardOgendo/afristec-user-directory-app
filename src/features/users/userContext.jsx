import { createContext, useContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [recentSearches, setRecentSearches] = useState([])

  // load/save to localStorage
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("user-favorites")) || []
    const recent = JSON.parse(localStorage.getItem("user-recentSearches")) || []
    setFavorites(favs)
    setRecentSearches(recent)
  }, [])

  
  useEffect(() => {
    localStorage.setItem("user-favorites", JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem("user-recentSearches", JSON.stringify(recentSearches))
  }, [recentSearches])


  const toggleFavorite = (userId) => {
    setFavorites((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    )
  }

  const addRecentSearch = (term) => {
    const trimmed = term.trim().toLowerCase()
    if (!trimmed) return

    setRecentSearches((prev) => {
      const updated = [trimmed, ...prev.filter((t) => t !== trimmed)]
      return updated.slice(0, 5) // Limited to 5
    })
  }

  return (
    <UserContext.Provider value={{ favorites, recentSearches, toggleFavorite, addRecentSearch }}>
      {children}
    </UserContext.Provider>
  )
}
