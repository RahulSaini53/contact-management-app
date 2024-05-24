import { Link } from "react-router-dom"
// import React from 'react';
import Sidebar from "./sidebar"
import { useState } from "react";

export default function Header():React.ReactElement{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
    return (
       <>
        <header className="relative w-full min-h-16">
            <nav className="bg-blue-600 text-white p-4 min-h-16 w-full fixed z-[100] flex justify-between">
              <div className="items-center flex flex-col justify-center w-12 space-y-1 rounded-full py-2 active:scale-95 px-2 hover:bg-slate-600 md:hidden" onClick={toggleSidebar}>
                <div className="border-2 w-full"></div>
                <div className="border-2 w-full"></div>
                <div className="border-2 w-full"></div>
              </div>
              <div className="container  flex justify-center">
                <Link to="/" className="text-lg font-semibold max-sm:text-base">Contact Management App</Link>
                {/* <div>
                  <Link to="/" className="mr-4">Contacts</Link>
                  <Link to="/dashboard">Dashboard</Link>
                </div> */}
              </div>
              <div className="md:hidden:"></div>
            </nav>
        </header>
        {isSidebarOpen && <Sidebar />}
        </>
    )
}