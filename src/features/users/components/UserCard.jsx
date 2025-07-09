import { FaRegStar, FaStar } from "react-icons/fa"


const UserCard = ({ user }) => {
  
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition hover:shadow-lg">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {user.phone}
          </p>
        </div>

        <button>
            <FaStar />
        </button>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        @{user.username} – {user.company?.name}
      </div>
    </div>
  )
}

export default UserCard;
