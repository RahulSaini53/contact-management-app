// sidebar component

import React from "react"
import { Link } from "react-router-dom"

const Sidebar: React.FC = () =>{
     return(
        <section className="w-40 z-50">
        <div className="flex flex-col space-y-2 items-center fixed h-[92vh] bg-orange-400 w-40 pt-3 pb-5 ">
         <Link to='/' className="text-blue-600 hover:underline rounded-md px-5 py-1 text-lg font-semibold bg-orange-600">Contact</Link>
         <Link to='/maps-charts' className="text-blue-600 hover:underline rounded-md px-2 py-1 bg-orange-600 text-lg font-semibold text-center">Maps and Charts</Link>
        </div>
        </section>
     )
}

export default Sidebar