import { FaLeaf, FaMoon, FaLaptopCode } from 'react-icons/fa';
import { RiSunLine } from "react-icons/ri";
import { Outlet,Link } from 'react-router-dom';
import { useTheme } from '../context/themeContext'; 

const AppLayout = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`flex flex-col pt-4 overflow-hidden h-screen ${theme === "dark" ? "bg-[#111]" : "bg-white dark:bg-gray-900"}`}>
            <nav className="w-[85%] mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FaLeaf className="text-[#e65100] mr-1" />
                        <Link to="/" className="text-white font-bold text-xl">Af<span className="text-[#e65100]">Users</span></Link>
                    </div>

                    <div className="h-[3px] w-[200px] rounded bg-[#e65100]"></div>

                    <div className="flex items-center">
                        <button onClick={toggleTheme} className="text-white mr-3">
                            { theme === "dark" ? <RiSunLine /> : <FaMoon />}
                        </button>
                         <FaLaptopCode className="text-gray-400 text-lg animate-spin" />
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