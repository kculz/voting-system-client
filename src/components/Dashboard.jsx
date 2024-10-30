import React from 'react'
import { Link } from 'react-router-dom'
import { VoteChart } from '../pages'
import VoteStatsTable from './VoteStatsTable'

const Dashboard = () => {
  return (
    <div className=" w-full min-h-[60vh] p-5 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

      <div className="grid md:grid-cols-3 grid-flow-row gap-4 mb-4">
               <Link to="/all-students" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-lt-red">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     All Students
                  </p>
               </Link>
               <Link to="/all-candidates" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-lt-red">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     All Candidates
                  </p>
               </Link>
               <Link to="/admins" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-lt-red">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     All Admin Users
                  </p>
               </Link>
               <Link to="/add-students" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-lt-red">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     Add Students
                  </p>
               </Link>
               <Link to="/add-candidates" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-lt-red">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     Add Candidates
                  </p>
               </Link>
               <Link to="/add-admins" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-lt-red">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     Add Admin Users
                  </p>
               </Link>
               <div className="mt-10">
                  <VoteChart />
               </div>
               <div className="col-span-2">
                  <VoteStatsTable />
               </div>
            </div>
            
            
          </div>
  )
}

export default Dashboard
