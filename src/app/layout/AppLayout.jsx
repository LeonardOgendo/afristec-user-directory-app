
import { FaLeaf } from 'react-icons/fa';
import { Outlet,Link } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-gray-800 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FaLeaf className="text-white mr-2" />
                        <Link to="/" className="text-white font-bold text-lg">Af-Users</Link>
                    </div>
                    <div className="flex items-center">
                        <input type="text" placeholder="Search" className="bg-gray-700 text-white rounded-md px-2 py-1 mr-2" />
                        <button className="text-white mr-2">
                            <FaLeaf />
                        </button>
                        <button className="text-white">
                            <FaLeaf />
                        </button>
                    </div>
                </div>
            </nav>
            <div className="flex-grow">
                <Outlet />
            </div>
            <footer className="bg-gray-800 p-4 text-white text-center">
                <p>Powered By React</p>
            </footer>
        </div>
    );
};

export default AppLayout;