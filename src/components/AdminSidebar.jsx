import React from 'react'
import { RiAdminLine, RiDashboardFill } from "react-icons/ri";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside id="separator-sidebar" className="absolute top-24 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
                <li>
                    <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    
                    <RiDashboardFill className="w-5 h-5 text-gray-500 text-5xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="ms-3">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/all-students" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    
                    <PiStudentBold className="w-5 h-5 text-gray-500 text-5xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Students</span>
                    </Link>
                </li>
                <li>
                    <Link to="/all-candidates" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    
                    <MdHowToVote className="w-5 h-5 text-gray-500 text-5xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Candidates</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admins" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    
                    <RiAdminLine className="w-5 h-5 text-gray-500 text-5xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Admins</span>
                    </Link>
                </li>

                <li>
                    <Link to="/turnout" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    
                    <FaArrowsDownToPeople className="w-5 h-5 text-gray-500 text-7xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Voter Turnout</span>
                    </Link>
                </li>
            </ul>
            
        </div>
        </aside>
  )
}

export default AdminSidebar
