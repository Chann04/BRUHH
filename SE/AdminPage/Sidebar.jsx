import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Styles/appointments.css"

function Sidebar() {
  return (
    <aside id='sidebar'>
      <div className= 'sidebar-title'>
      <div className="p-8 flex items-center gap-4 border-b border-gray-100">
        <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
          DT
        </div>
        <h3 className="text-sm font-semibold text-gray-800 leading-tight">
          D'jackman Tailor Deluxe
        </h3>
      </div>


      </div>
      <ul className= 'sidebar-list'>
        <li className= 'sidebar-list-item'>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''}>
                Dashboard
            </NavLink>
        </li>
        <li className= 'sidebar-list-item'>
            <NavLink to="/Appointment" className={({ isActive }) => isActive ? 'active' : ''}>
                Appointment
            </NavLink>
        </li>
        <li className= 'sidebar-list-item'>
            <NavLink to="/admin/customization" className={({ isActive }) => isActive ? 'active' : ''}>
                Customization
            </NavLink>
        </li>
        <li className= 'sidebar-list-item'>
            <NavLink to="/drycleaning" className={({ isActive }) => isActive ? 'active' : ''}>
                 Dry Cleaning
            </NavLink>
        </li>
        <li className= 'sidebar-list-item'>
            <NavLink to="/rental" className={({ isActive }) => isActive ? 'active' : ''}>
                Rental
            </NavLink>
        </li>
        <li className='sidebar-list-item'>
            <NavLink to="/AddRent" className={({ isActive }) => isActive ? 'active' : ''}>
                Post rent
            </NavLink>
        </li>
        <li className='sidebar-list-item'>
            <NavLink to="/repairs" className={({ isActive }) => isActive ? 'active' : ''}>
                Repair
            </NavLink>
        </li>
        <li className='sidebar-list-item'>
            <NavLink to="/inventory" className={({ isActive }) => isActive ? 'active' : ''}>
                Inventory
            </NavLink>
        </li>
      </ul>
    </aside>
  );
}


export default Sidebar;