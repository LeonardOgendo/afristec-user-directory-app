
import { FaLeaf, FaMoon } from 'react-icons/fa';
import { Outlet,Link } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className="flex flex-col bg-[#111] pt-4 overflow-hidden h-screen">
            <nav className="w-[85%] mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FaLeaf className="text-[#fd4236] mr-1" />
                        <Link to="/" className="text-white font-bold text-lg">Af<span className="text-[#fd4236]">Users</span></Link>
                    </div>

                    <div className="flex items-center">
                        <button className="text-white mr-2">
                            <FaMoon />
                        </button>
                    </div>
                </div>
            </nav>
        
            <div className="flex-grow w-[85%] mx-auto">
                <Outlet />
            </div>
            <footer className="w-[85%] mx-auto p-4 text-white text-center">
                <p>Powered By React</p>
            </footer>
        </div>
    );
};

export default AppLayout;