import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 

const Header: React.FC = () => {
    return (
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-2xl font-bold tracking-wide">
            <Link to="/" className="hover:text-yellow-300 transition duration-300">
                Explore Lovely Yan
            </Link>
          </h1>
        </div>
          
        <ul className="flex space-x-6">
          <li>
            <Link to="/InternDiary" className="hover:text-yellow-300 transition duration-300">Internship Diaries</Link>
          </li>
          <li>
            <Link to="/showcase" className="hover:text-yellow-300 transition duration-300">Showcase</Link>
          </li>
          <li>
            <Link to="/passions" className="hover:text-yellow-300 transition duration-300">Passions</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
          </li>
        </ul>
        </nav>
      </header>
    );
  };

export default Header;
