import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';  // Ensure correct path for assets
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems} = useContext(ShopContext)

  const logOut =()=>{
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }

  return (
    <div className="relative flex items-center justify-between py-5 px-4 font-medium">
      {/* Logo Section */}
      <Link to='/'><img src={assets.logo} className="w-36" alt="Logo" /></Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex items-center gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="m-0">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="m-0">COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="m-0">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="m-0">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right-side Icons */}
      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

        {/* Profile Dropdown */}
        <div className="group relative">
          <img onClick={()=> token ?null: navigate('/login')} className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
          {token && <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logOut} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon - Always Visible on Small Screens */}
        <img
          onClick={() => setVisible(!visible)}  // Toggle visibility on click
          src={assets.menu_icon}
          className="w-5 cursor-pointer block sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '80%' }}  // You can control the width of the sidebar
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setVisible(false)} className="text-2xl">✕</button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-start gap-5 p-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-start gap-1" onClick={() => setVisible(false)}>
            <p className="m-0">HOME</p>
          </NavLink>

          <NavLink to="/collection" className="flex flex-col items-start gap-1" onClick={() => setVisible(false)}>
            <p className="m-0">COLLECTION</p>
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-start gap-1" onClick={() => setVisible(false)}>
            <p className="m-0">ABOUT</p>
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-start gap-1" onClick={() => setVisible(false)}>
            <p className="m-0">CONTACT</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
