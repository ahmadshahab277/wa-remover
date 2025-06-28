// Dashboard.jsx – Main layout with Sidebar and Routing

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Menu, X, LayoutDashboard, Settings, User2, LogOut, ChevronLeft, BarChart3 } from 'lucide-react';
import User from './User';
import Profile from './Profile';
import SettingsSec from './SettingsSec';
import Logout from './Logout';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/user/dashboard/user' },
    { name: 'Profile', icon: User2, path: '/user/dashboard/profile' },
    { name: 'Settings', icon: Settings, path: '/user/dashboard/settings' },
    { name: 'Logout', icon: LogOut, path: '/user/dashboard/logout' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className='flex relative min-h-screen'>
      {/* Sidebar Section */}
      <div className='left-side'>
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-[8px] bg-[var(--tog-color)] text-white hover:bg-[var(--tog-color)] transition-colors shadow-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleSidebar}
          />
        )}

        <div
          className={`absolute top-0 left-0 h-[100vh] bg-[#000000] border-r border-slate-700 transition-all duration-300 z-40
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 ${isCollapsed ? "lg:w-24" : "lg:w-64"} w-64 shadow-2xl`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[var(--primary-color)]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[var(--tog-color)] to-[var(--secondary-color)] rounded-[8px] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
            </div>
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex items-center justify-center mx-2 p-1 rounded-[8px] hover:bg-[var(--tog-color)] cursor-pointer text-slate-400 hover:text-white"
            >
              <ChevronLeft
                size={20}
                className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveItem(item.name);
                    navigate(item.path);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-[8px] cursor-pointer group transition-all duration-200
                    ${isActive ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--tog-color)] text-white shadow-lg" : "text-slate-300 hover:bg-[var(--secondary-color)] hover:text-white"}`}
                >
                  <Icon
                    size={20}
                    className={`${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`}
                  />
                  {!isCollapsed && <span className="font-medium">{item.name}</span>}
                  {isActive && !isCollapsed && <div className="ml-auto w-2 h-2 bg-white rounded-full opacity-80" />}
                </button>
              );
            })}
          </nav>

          {!isCollapsed && (
            <div className="p-4 border-t border-slate-700">
              <div className="flex items-center space-x-3 px-4 py-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--tog-color)] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">John Doe</p>
                  <p className="text-xs text-slate-400 truncate">john@example.com</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Section */}
      <div className='right-side ml-[250px] flex-1 p-4'>
        <Routes>
          <Route path='user' element={<User />} />
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<SettingsSec/>}/>
          <Route path='logout' element={<Logout/>}/>
        </Routes>
      </div>
    </div>
  );
}
