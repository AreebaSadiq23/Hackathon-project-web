import React from "react";
import Link from "next/link";
import { FaUser, FaSearch, FaShoppingCart, FaHeart, FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">Bandage</div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          </li>
          <li className="relative group">
            {/* Shop Menu with Dropdown Icon */}
            <span className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <Link href="/ShopPage" className="text-gray-700 hover:text-blue-500">Shop</Link> <FaChevronDown className="ml-1" />
            </span>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </li>
          <li>
            <Link href="/pages" className="text-gray-700 hover:text-blue-500">Pages</Link>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Link href="/login" className="flex items-center text-blue-500">
          <FaUser className="mr-2" /> Login/Register
        </Link>
        <Link href="/search" className="text-blue-500">
          <FaSearch />
        </Link>

        {/* Cart Icon with Badge */}
        <div className="relative">
          <Link href="/cart" className="text-blue-500">
            <FaShoppingCart />
          </Link>
          <span className="absolute -top-2 -right-2  text-xs px-1 text-blue-500">
            1
          </span>
        </div>

        {/* Wishlist Icon with Badge */}
        <div className="relative">
          <Link href="/wishlist" className="text-blue-500">
            <FaHeart />
          </Link>
          <span className="absolute -top-2 -right-2 px-1 text-blue-500">
            1
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
