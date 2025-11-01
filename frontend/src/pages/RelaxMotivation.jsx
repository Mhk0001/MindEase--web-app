import React from "react";
import Header from "../components/relaxHeader";

const RelaxMotivation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
     <iframe
        src="/pages/motivation-page/motivation.html"
        title="Relax Motivation"
        className="w-full h-screen border-0"
      ></iframe>
    </div>

    
  );
};

export default RelaxMotivation;
