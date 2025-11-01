// // // RelaxHomepage.jsx
// // import React from "react";
// // import Header from "../components/relaxHeader"; // Your header with links

// // const RelaxHomepage = () => {
// //   return (
// //     <div className="min-h-screen">
// //       <Header />
// //       <iframe
// //         src="/pages/Homepage/index.html"   // This points to your actual HTML file
// //         title="Relax Homepage"
// //         className="w-full h-screen border-0"
// //       ></iframe>
// //     </div>
// //   );
// // };

// // export default RelaxHomepage;
// // src/pages/RelaxHomepage.jsx
// import React from "react";

// const RelaxHomepage = () => {
//   return (
//     <iframe
//       src="/pages/Homepage/index.html"
//       title="Relax Homepage"
//       className="w-full h-screen border-0"
//     />
//   );
// };

// export default RelaxHomepage;
import React, { useEffect } from "react";
import RelaxHeader from "../components/relaxHeader"; // make sure path is correct

const RelaxHomepage = () => {
  // Dynamically load the old style.css from public folder
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/pages/Homepage/style.css"; // path to your CSS in public
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="homepage">
      {/* Header */}
      <RelaxHeader />

      {/* Hero Banner */}
      <div>
        <img
          src="/Images/backg.png"
          alt="Relax Banner"
          style={{ width: "100%", height: "auto" }}
        />
        {/* <h1 className="hero-title">Keep Calm and Carry On</h1> */}
      </div>

      {/* About Section */}
      <section id="about" className="container py-5">
        {/* <h2 className="text-center mb-4">About Us</h2> */}
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex flex-column flex-md-row bg-light p-4 shadow rounded">
              <img
                src="/Images/calmwork.jpg"
                alt="Calm Work"
                className="rounded mb-3 mb-md-0 mr-md-3"
                style={{ width: "300px", height: "auto" }}
              />
              <p>
                A stressful work environment can contribute to problems such
                as headache, stomachache, sleep disturbances, short temper,
                and difficulty concentrating. Our engineer productivity platform
                is designed to help engineers achieve optimal productivity
                while maintaining mental and emotional well-being.
                <br />
                <br />
                Users can track task completion, practice AR meditation, play
                stress-buster games, and engage in motivational exercises to
                reduce stress and anxiety at work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Buttons */}
      <section className="container text-center py-5">
        <h2 className="mb-4">Explore More</h2>
        <a
          href="/games"
          className="btn btn-primary mx-2 mb-2"
        >
          🎮 Games
        </a>
        <a
          href="/relax/meditation"
          className="btn btn-success mx-2 mb-2"
        >
          🧘 Meditation
        </a>
        <a
          href="/relax/motivation"
          className="btn btn-warning mx-2 mb-2"
        >
          💡 Quotes
        </a>
      </section>
    </div>
  );
};

export default RelaxHomepage;
