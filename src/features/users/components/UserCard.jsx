import { FaUserCircle, FaUser, FaEnvelope, FaPhone, FaStar, FaRegStar } from "react-icons/fa";
import { useUserContext } from "../userContext";
import { useTheme } from "../../../app/context/themeContext";

const UserCard = ({ user }) => {
  const { favorites, toggleFavorite } = useUserContext();
  const isFav = favorites.includes(user.id);

  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#1c1c1c]" : "bg-white dark:bg-gray-800"} text-white shadow-md rounded-xl p-6 transition hover:shadow-lg flex flex-col items-center`}>
      
      {/* Avatar */}
      <FaUserCircle className="text-7xl text-[#fff8e7] mb-4" />

      {/* User info */}
      <div className="w-full space-y-2">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaUser className="text-[#f57c00]" />
          <span>{user.name}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <FaEnvelope className="text-[#f57c00]" />
          <span>{user.email}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <FaPhone className="text-[#f57c00]" />
          <span>{user.phone}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-center mt-4 text-sm text-gray-400">
        <span>@{user.username}</span>

        <button
          onClick={() => toggleFavorite(user.id)}
          className="text-[#e65100] hover:scale-110 transition-transform"
        >
          {isFav ? <FaStar /> : <FaRegStar />}
        </button>
      </div>
    </div>
  )
}

export default UserCard
