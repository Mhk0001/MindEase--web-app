
// import React, { useState } from "react";

// // Add a thumbnail image for each game
// const games = [
//   { title: "Breakout Game", path: "/games/breakout game/index.html", emoji: "🧱", image: "/games/breakout game/thumbnail.png" },
//   { title: "Fruit Slicing Game", path: "/games/fruit-slicing game/index.html", emoji: "🍉", image: "/games/fruit-slicing game/thumbnail.png" },
//   { title: "Memory Card Game", path: "/games/memorycard game/index.html", emoji: "🧠", image: "/games/memorycard game/thumbnail.png" },
//   { title: "Quiz Game", path: "/games/quiz game/index.html", emoji: "❓", image: "/games/quiz game/thumbnail.png" },
//   { title: "Speed Typing Game", path: "/games/speed-typing game/index.html", emoji: "⌨️", image: "/games/speed-typing game/thumbnail.png" },
//    {  title: "SnakeMania", path: "/games/snake game/index.html",emoji: "🐍", image: "/games/snake game/thumbnail.png" },
// {
//   title: "Stress Burster Game",
//   path: "/games/bubble-pop game/index.html",
//   emoji: "🫧",
//   image: "/games/bubble-pop game/thumbnail.png"
// }
// ];

// const GamesPage = () => {
//   const [selectedGame, setSelectedGame] = useState(null);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4 text-center">🎮 Relaxation Games</h1>
//       <p className="text-gray-600 text-center mb-8">
//         Take a break and enjoy these simple and relaxing games.
//       </p>

//       {/* Game list */}
//       {!selectedGame && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {games.map((game, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl transition text-center overflow-hidden"
//               onClick={() => setSelectedGame(game)}
//             >
//               <img
//                 src={game.image}
//                 alt={game.title}
//                 className="w-full h-64 object-cover"
//               />
//               <h2 className="text-xl font-semibold mt-3 mb-4">
//                 {game.emoji} {game.title}
//               </h2>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Selected game view */}
//       {selectedGame && (
//         <div>
//           <button
//             className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={() => setSelectedGame(null)}
//           >
//             ← Back to Games
//           </button>
//           <h2 className="text-2xl font-bold mb-4 text-center">
//             {selectedGame.emoji} {selectedGame.title}
//           </h2>
//           <iframe
//             src={selectedGame.path}
//             title={selectedGame.title}
//             className="w-full h-[80vh] rounded border"
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GamesPage;
import React, { useState } from "react";
import Header from "../components/relaxHeader"; // adjust path

const games = [
  { title: "Breakout Game", path: "/games/breakout game/index.html", emoji: "🧱", image: "/games/breakout game/thumbnail.png" },
  { title: "Fruit Slicing Game", path: "/games/fruit-slicing game/index.html", emoji: "🍉", image: "/games/fruit-slicing game/thumbnail.png" },
  { title: "Memory Card Game", path: "/games/memorycard game/index.html", emoji: "🧠", image: "/games/memorycard game/thumbnail.png" },
  { title: "Quiz Game", path: "/games/quiz game/index.html", emoji: "❓", image: "/games/quiz game/thumbnail.png" },
  { title: "Speed Typing Game", path: "/games/speed-typing game/index.html", emoji: "⌨️", image: "/games/speed-typing game/thumbnail.png" },
  { title: "SnakeMania", path: "/games/snake game/index.html", emoji: "🐍", image: "/games/snake game/thumbnail.png" },
  { title: "Stress Burster Game", path: "/games/bubble-pop game/index.html", emoji: "🫧", image: "/games/bubble-pop game/thumbnail.png" }
];

const GamesPage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="p-6">
        {!selectedGame && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-center">🎮 Relaxation Games</h1>
            <p className="text-gray-600 text-center mb-8">
              Take a break and enjoy these simple and relaxing games.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl transition text-center overflow-hidden"
                  onClick={() => setSelectedGame(game)}
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-64 object-cover"
                  />
                  <h2 className="text-xl font-semibold mt-3 mb-4">
                    {game.emoji} {game.title}
                  </h2>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedGame && (
          <div>
            <button
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedGame(null)}
            >
              ← Back to Games
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {selectedGame.emoji} {selectedGame.title}
            </h2>
            <iframe
              src={selectedGame.path}
              title={selectedGame.title}
              className="w-full h-[80vh] rounded border"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesPage;
