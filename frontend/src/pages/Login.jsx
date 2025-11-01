// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
// import { Button } from '../components/ui/button'
// import { Input } from '../components/ui/input'
// import { Label } from '../components/ui/label'
// import { toast } from 'react-hot-toast'

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const navigate = useNavigate()
//   const { login } = useAuth()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       await login(email, password)
//       toast.success('Logged in successfully')
//       navigate('/dashboard')
//     } catch (error) {
//       toast.error(error.message || 'Failed to log in')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-md mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-6">Log in to your account</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <Button type="submit" className="w-full" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Log in'}
//           </Button>
//         </form>
//         <p className="text-center mt-4">
//           Don't have an account?{' '}
//           <Link to="/register" className="text-primary hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react"; // Icon for back arrow

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      // toast.success("Logged in successfully 🌸");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Failed to log in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center 
                    bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 overflow-hidden">

      {/* 🔙 Back Arrow Button at Top Left */}
      <div className="absolute top-4 left-4 z-20">
        <Button
          variant="outline"
          size="lg"
          className="p-3 rounded-full"
          onClick={() => navigate("/")}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Button>
      </div>

      {/* 🌟 Floating Stars */}
      <FloatingStar top="10%" left="15%" delay={0} />
      <FloatingStar top="40%" left="70%" delay={2} />
      <FloatingStar top="65%" left="20%" delay={4} />
      <FloatingStar top="80%" left="85%" delay={6} />

      {/* 🌟 Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl shadow-xl 
                   backdrop-blur-md bg-white/70 border border-white/40"
      >
        {/* Welcome Back Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-6 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Welcome Back 🌸
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="email" className="font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password" className="font-semibold">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          {/* 🌈 Animated Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              type="submit"
              className="w-full px-6 py-3 rounded-full text-lg font-semibold 
                         bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                         text-white shadow-lg hover:scale-105 transition-transform"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in 🚀"}
            </Button>
          </motion.div>
        </form>

        <p className="text-center mt-4 text-gray-700">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-purple-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

/* 🌟 Floating Star Component */
function FloatingStar({ top, left, delay }) {
  return (
    <motion.div
      className="absolute text-3xl"
      style={{ top, left }}
      animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay }}
    >
      ✨
    </motion.div>
  );
}

