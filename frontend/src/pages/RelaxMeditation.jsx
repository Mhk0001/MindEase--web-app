// // src/pages/RelaxMeditation.jsx
// import React from "react";
// import Header from "../components/relaxHeader";

// const RelaxMeditation = () => {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <iframe
//         src="/pages/Meditation page/index.html"
//         title="Relax Meditation"
//         className="w-full h-screen border-0"
//       ></iframe>
//     </div>
//   );
// };

// export default RelaxMeditation;
// src/pages/RelaxMeditation.jsx
import React, { useEffect, useRef } from "react";
import Header from "../components/relaxHeader";

const RelaxMeditation = () => {
  const musicRef = useRef(null);

  useEffect(() => {
    const music = musicRef.current;
    if (music) {
      const playPromise = music.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log("Autoplay blocked:", err));
      }
    }

    // Stop music when component unmounts
    return () => {
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <audio ref={musicRef} src="/Images/song.mp3" loop autoPlay />
      <iframe
        src="/pages/meditation-page/index.html"
        title="Relax Meditation"
        className="w-full h-screen border-0"
      ></iframe>
    </div>
  );
};

export default RelaxMeditation;
