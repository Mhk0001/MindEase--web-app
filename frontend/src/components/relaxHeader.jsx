// relaxHeader.jsx
import React from "react";
import { Link } from "react-router-dom";

const RelaxHeader = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MindEase</h1>
      <nav className="space-x-4">
    <Link to="/relax/home" className="hover:underline">Home</Link>
<Link to="/relax/meditation" className="hover:underline">Meditation</Link>
<Link to="/games" className="hover:underline">Games</Link>
<Link to="/relax/motivation" className="hover:underline">Quotes</Link>

      </nav>
    </header>
  );
};

export default RelaxHeader;
