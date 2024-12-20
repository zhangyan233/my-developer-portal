import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Developer Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
