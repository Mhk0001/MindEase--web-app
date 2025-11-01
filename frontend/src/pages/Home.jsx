// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../components/ui/button';
// import { Card, CardContent } from '../components/ui/card';
// import { Input } from '../components/ui/input';
// import { useAuth } from '../context/AuthContext'; // Assume this hook exists for authentication
// import { motion } from 'framer-motion';

// export default function Home() {
//   const { user } = useAuth();
//   const [email, setEmail] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background to-background/95">

      

//       <main className="pt-24">
//         <div className="container mx-auto px-4 py-12">
//           {/* Hero Section */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-5xl mx-auto text-center mb-24"
//           >
//             <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
//               Elevate Your Mental Well-being
//             </h1>
//             <p className="text-xl leading-8 text-muted-foreground mb-12 max-w-3xl mx-auto">
//               Embark on a transformative journey with our AI-powered mental health platform. Track your mood, manage stress, and cultivate lasting positive habits.
//             </p>
//             {!user && (
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//                 <Input 
//                   type="email" 
//                   placeholder="Enter your email" 
//                   value={email} 
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="max-w-xs"
//                 />
//                 <Link to="/register">
//                 <Button size="lg" className="w-full sm:w-auto">
//                   Start Free Trial
//                 </Button>
//                 </Link>
//               </div>
//             )}
//             {/* <div className="relative">
//               <img
//                 src="\imageweb.png"
//                 alt="MindfulMe App Interface"
//                 className="rounded-lg shadow-2xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg"></div>
//             </div> */}
//           </motion.div>
          
//           {/* Features Section */}
//           <div className="mb-24">
//             <h2 className="text-4xl font-bold text-center mb-16">Cutting-edge Features for Your Mental Wellness</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <FeatureCard
//                 icon={<CheckCircleIcon />}
//                 title="AI-Powered Insights"
//                 description="Our advanced AI analyzes your daily check-ins to provide personalized recommendations and insights, helping you understand your emotional patterns."
//               />
//               <FeatureCard
//                 icon={<ChartIcon />}
//                 title="Interactive Progress Tracking"
//                 description="Visualize your mental health journey with interactive charts and goal-setting tools. Celebrate milestones and identify areas for growth."
//               />
//               <FeatureCard
//                 icon={<LockIcon />}
//                 title="Bank-Grade Security"
//                 description="Your data is protected with end-to-end encryption and adheres to HIPAA standards, ensuring your personal information remains confidential and secure."
//               />
//             </div>
//           </div>

       

//           {/* Call-to-Action Section */}
//           <div className="text-center">
//             <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Mental Health?</h2>
            
//             {!user && (
//               <Link to="/register">
//                 <Button size="lg" className="text-lg px-8 py-6">
//                   Start your Free Trial
//                 </Button>
//               </Link>
//             )}
//             {user && (
//               <Link to="/dashboard">
//                 <Button size="lg" className="text-lg px-8 py-6">
//                   Go to Your Dashboard
//                 </Button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </main>

//       <footer className="bg-primary/5 mt-24 py-12">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-muted-foreground">&copy; 2024 MindfulMe. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
//       <CardContent className="flex flex-col items-center text-center p-6">
//         <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
//           {icon}
//         </div>
//         <h3 className="text-2xl font-semibold mb-4">{title}</h3>
//         <p className="text-muted-foreground">{description}</p>
//       </CardContent>
//     </Card>
//   );
// }

// function TestimonialCard({ quote, author, image }) {
//   return (
//     <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
//       <CardContent className="p-6 flex flex-col items-center text-center">
//         <img src={image} alt={author} className="w-20 h-20 rounded-full mb-6" />
//         <p className="text-lg mb-4 italic">"{quote}"</p>
//         <p className="font-semibold">{author}</p>
//       </CardContent>
//     </Card>
//   );
// }

// function CheckCircleIcon() {
//   return (
//     <svg
//       className="h-8 w-8 text-primary"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//       />
//     </svg>
//   );
// }

// function ChartIcon() {
//   return (
//     <svg
//       className="h-8 w-8 text-primary"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M13 10V3L4 14h7v7l9-11h-7z"
//       />
//     </svg>
//   );
// }

// function LockIcon() {
//   return (
//     <svg
//       className="h-8 w-8 text-primary"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//       />
//     </svg>
//   );
// }






// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { useAuth } from "../context/AuthContext";
// import { motion } from "framer-motion";

// export default function Home() {
//   const { user } = useAuth();
//   const [email, setEmail] = useState("");

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100">
//       {/* 🌸 Floating Flowers with animation */}
//       <FloatingFlower top="12%" left="15%" delay={0} size="3xl" emoji="🌸" />
//       <FloatingFlower top="35%" left="75%" delay={2} size="2xl" emoji="🌷" />
//       <FloatingFlower top="65%" left="20%" delay={3} size="4xl" emoji="🌼" />
//       <FloatingFlower top="85%" left="80%" delay={5} size="3xl" emoji="🌺" />

//       <main className="relative z-10 pt-24">
//         <div className="container mx-auto px-4 py-12 text-center">
//           {/* 🌟 Hero Section */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-6xl sm:text-7xl font-extrabold mb-8 
//                        bg-clip-text text-transparent 
//                        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
//                        animate-text-shimmer"
//           >
//             Elevate Your Mental Well-being
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 1 }}
//             className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
//           >
//             Relax, recharge, and grow with our AI-powered wellness platform.  
//             Track moods, practice mindfulness, and bloom into your best self 🌷✨
//           </motion.p>

//           {/* Email + Button */}
//           {!user && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 }}
//               className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
//             >
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="max-w-xs rounded-xl shadow-md"
//               />
//               <Link to="/register">
//                 <GlowingButton>Start Free Trial 🚀</GlowingButton>
//               </Link>
//             </motion.div>
//           )}

//           {/* 🌟 Features Section */}
//           <div className="grid md:grid-cols-3 gap-10 mt-24">
//             <FeatureCard
//               emoji="🤖"
//               title="AI Insights"
//               description="Personalized tips to keep your mind balanced and positive."
//               gradient="from-pink-200/70 to-purple-200/70"
//             />
//             <FeatureCard
//               emoji="📊"
//               title="Mood Tracker"
//               description="Visualize emotions with beautiful interactive charts."
//               gradient="from-blue-200/70 to-indigo-200/70"
//             />
//             <FeatureCard
//               emoji="🧘"
//               title="Mindfulness"
//               description="Access guided breathing and meditation anytime."
//               gradient="from-green-200/70 to-emerald-200/70"
//             />
//           </div>

//           {/* 🌟 Call to Action */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//             className="mt-28"
//           >
//             <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
//               Ready to Start Your Journey? 🌈
//             </h2>
//             {user ? (
//               <Link to="/dashboard">
//                 <GlowingButton>Go to Dashboard</GlowingButton>
//               </Link>
//             ) : (
//               <Link to="/register">
//                 <GlowingButton>Get Started 🚀</GlowingButton>
//               </Link>
//             )}
//           </motion.div>
//         </div>
//       </main>

//       {/* 🌊 Footer */}
//       <footer className="relative z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mt-28 py-12 animate-gradient-x">
//         <p className="text-white text-center font-medium tracking-wide">
//           &copy; 2024 MindEase 🌸 All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// /* 🌸 Floating Flower Component */
// function FloatingFlower({ top, left, delay, size, emoji }) {
//   return (
//     <motion.div
//       className={`absolute text-${size}`}
//       style={{ top, left }}
//       animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
//       transition={{ duration: 6, repeat: Infinity, delay }}
//     >
//       {emoji}
//     </motion.div>
//   );
// }

// /* ✨ Feature Card */
// function FeatureCard({ emoji, title, description, gradient }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.08, rotate: 1 }}
//       className={`p-8 rounded-3xl shadow-xl backdrop-blur-md 
//                  bg-gradient-to-br ${gradient} text-center 
//                  border border-white/50 transition-all`}
//     >
//       <div className="text-5xl mb-4">{emoji}</div>
//       <h3 className="text-2xl font-bold mb-3">{title}</h3>
//       <p className="text-gray-800">{description}</p>
//     </motion.div>
//   );
// }

// /* 🌈 Glowing Gradient Button */
// function GlowingButton({ children }) {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.1 }}
//       className="px-10 py-4 text-lg font-semibold rounded-full 
//                  text-white shadow-lg bg-gradient-to-r 
//                  from-pink-500 via-purple-500 to-indigo-500 
//                  relative overflow-hidden animate-pulse"
//     >
//       <span className="relative z-10">{children}</span>
//       <span className="absolute inset-0 rounded-full bg-white/20 blur-lg"></span>
//     </motion.button>
//   );
// }





import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Home() {
  const { user } = useAuth();
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100">
      {/* 🌸 Floating Flowers */}
      <FloatingFlower top="10%" left="20%" delay={0} />
      <FloatingFlower top="30%" left="70%" delay={2} />
      <FloatingFlower top="60%" left="15%" delay={4} />
      <FloatingFlower top="80%" left="80%" delay={6} />

      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-4 py-12 text-center">
      

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-6xl sm:text-7xl font-extrabold mb-12 leading-[1.3] 
             bg-clip-text text-transparent 
             bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
             drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] pb-4"
>
  Elevate Your Mental Well-being 🌸
</motion.h1>




          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Relax, recharge, and grow with our AI-powered wellness platform.  
            Track moods, practice mindfulness, and bloom into your best self 🌷✨
          </p>

          {/* Email + Button */}
          {!user && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-xs"
              />
              <Link to="/register">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-full 
                             bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 
                             text-white shadow-xl hover:scale-105 transition-transform"
                >
                  Start Trial 🚀
                </Button>
              </Link>
            </div>
          )}

          {/* 🌟 Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <FeatureCard
              emoji="🤖"
              title="AI Insights"
              description="Personalized tips to keep your mind balanced and positive."
              gradient="from-pink-200/60 to-purple-200/60"
            />
            <FeatureCard
              emoji="📊"
              title="Mood Tracker"
              description="Visualize emotions with beautiful interactive charts."
              gradient="from-blue-200/60 to-indigo-200/60"
            />
            <FeatureCard
              emoji="🧘"
              title="Mindfulness"
              description="Access guided breathing and meditation anytime."
              gradient="from-green-200/60 to-emerald-200/60"
            />
          </div>

          {/* 🌟 Call to Action */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey? 🌈
            </h2>
            {user ? (
              <Link to="/dashboard">
                <GlowingButton>Go to Dashboard</GlowingButton>
              </Link>
            ) : (
              <Link to="/register">
                <GlowingButton>Get Started 🚀</GlowingButton>
              </Link>
            )}
          </div>
        </div>
      </main>

      {/* 🌊 Footer with gradient */}
      <footer className="relative z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mt-24 py-12">
        <p className="text-white text-center font-medium">
          &copy; 2024 MindEase 🌸 All rights reserved.
        </p>
      </footer>
    </div>
  );
}

/* 🌸 Floating Flower Component */
function FloatingFlower({ top, left, delay }) {
  return (
    <motion.div
      className="absolute text-4xl"
      style={{ top, left }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay }}
    >
      🌷
    </motion.div>
  );
}

/* ✨ Feature Card */
function FeatureCard({ emoji, title, description, gradient }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-8 rounded-2xl shadow-lg backdrop-blur-md 
                 bg-gradient-to-br ${gradient} text-center`}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </motion.div>
  );
}

/* 🌈 Glowing Gradient Button */
function GlowingButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="px-10 py-4 text-lg font-semibold rounded-full 
                 text-white shadow-xl bg-gradient-to-r 
                 from-pink-600 via-purple-600 to-indigo-600"
    >
      {children}
    </motion.button>
  );
}
