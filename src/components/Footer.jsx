import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center p-4 text-gray-500 bg-gray-100 absolute w-screen mt-10 ">
      &copy; {currentYear} <Link to="/admin-login" className="text-blue-600 hover:text-blue-800">Made with ❤️ by Tapiwa Magwati</Link>. All rights reserved.
    </div>
  );
};

export default Footer;