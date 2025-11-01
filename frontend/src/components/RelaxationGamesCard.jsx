// import React from "react";
// import { useNavigate } from "react-router-dom";

// const RelaxationGamesCard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="mt-10 bg-white shadow-md rounded-lg p-6 text-center">
//       <h2 className="text-xl font-semibold mb-2">Relax Your Mind 🎮</h2>
//       <p className="text-gray-600 mb-4">
//         Take a short break and play some relaxing games!
//       </p>
//       <button
//         onClick={() => navigate("/games")}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//       >
//         Play Now
//       </button>
//     </div>
//   );
// };

// export default RelaxationGamesCard;
import React from "react";
import { useNavigate } from "react-router-dom";

const RelaxationGamesCard = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg rounded-xl p-6 text-center text-white transform hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-bold mb-3">Relax Your Mind 🎮🧘</h2>
      <p className="text-white/90 mb-4">
        Take a short break from your busy day! 
        Enjoy **relaxing games**, **quick meditation exercises**, and activities to **refresh your mind**. 
        Reduce stress, sharpen focus, and have fun!
      </p>
      {/* <button
        onClick={() => navigate("/games")}
        className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow hover:shadow-lg hover:bg-white/90 transition"
      >

        Play & Relax
      </button> */}
      <button
  onClick={() => navigate("/relax/home")}  // Navigate to the RelaxHomepage component
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
>
  Relax & Play
</button>
    </div>
  );
};

export default RelaxationGamesCard;
