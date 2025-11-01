// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
// import { Button } from '../components/ui/button'
// import { Input } from '../components/ui/input'
// import { Label } from '../components/ui/label'
// import { toast } from 'react-hot-toast'

// export default function Register() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const navigate = useNavigate()
//   const { register } = useAuth()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match')
//       return
//     }
//     setIsLoading(true)
//     try {
//       await register(email, password)
//       toast.success('Account created successfully')
//       navigate('/dashboard')
//     } catch (error) {
//       toast.error(error.message || 'Failed to create account')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-md mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-6">Create an account</h1>
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
//               placeholder="Create a password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="confirmPassword">Confirm Password</Label>
//             <Input
//               id="confirmPassword"
//               type="password"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <Button type="submit" className="w-full" disabled={isLoading}>
//             {isLoading ? 'Creating account...' : 'Sign up'}
//           </Button>
//         </form>
//         <p className="text-center mt-4">
//           Already have an account?{' '}
//           <Link to="/login" className="text-primary hover:underline">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// // import { useState } from 'react'
// // import { useNavigate, Link } from 'react-router-dom'
// // import { useAuth } from '../context/AuthContext'
// // import { Button } from '../components/ui/button'
// // import { Input } from '../components/ui/input'
// // import { Label } from '../components/ui/label'
// // import { toast } from 'react-hot-toast'
// // import { ArrowLeft } from 'lucide-react'   // 👈 icon

// // export default function Register() {
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [confirmPassword, setConfirmPassword] = useState('')
// //   const [isLoading, setIsLoading] = useState(false)
// //   const navigate = useNavigate()
// //   const { register } = useAuth()

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     if (password !== confirmPassword) {
// //       toast.error('Passwords do not match')
// //       return
// //     }
// //     setIsLoading(true)
// //     try {
// //       await register(email, password)
// //       toast.success('Account created successfully')
// //       navigate('/dashboard')
// //     } catch (error) {
// //       toast.error(error.message || 'Failed to create account')
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
// //       <div className="max-w-md w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/40 relative">
        
// //         {/* 🔙 Back Button */}
// //         <Link 
// //           to="/" 
// //           className="absolute top-4 left-4 flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
// //         >
// //           <ArrowLeft size={18} /> Back
// //         </Link>

// //         <h1 className="text-3xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
// //           Create an account
// //         </h1>

// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <div>
// //             <Label htmlFor="email">Email</Label>
// //             <Input
// //               id="email"
// //               type="email"
// //               placeholder="Enter your email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
// //             />
// //           </div>
// //           <div>
// //             <Label htmlFor="password">Password</Label>
// //             <Input
// //               id="password"
// //               type="password"
// //               placeholder="Create a password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="rounded-xl focus:ring-2 focus:ring-purple-400 transition-all"
// //             />
// //           </div>
// //           <div>
// //             <Label htmlFor="confirmPassword">Confirm Password</Label>
// //             <Input
// //               id="confirmPassword"
// //               type="password"
// //               placeholder="Confirm your password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //               className="rounded-xl focus:ring-2 focus:ring-pink-400 transition-all"
// //             />
// //           </div>
// //           <Button
// //             type="submit"
// //             className="w-full rounded-xl py-3 font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg hover:scale-105 transition-transform"
// //             disabled={isLoading}
// //           >
// //             {isLoading ? 'Creating account...' : 'Sign up'}
// //           </Button>
// //         </form>

// //         <p className="text-center mt-6 text-gray-700">
// //           Already have an account?{' '}
// //           <Link to="/login" className="text-blue-600 font-semibold hover:underline">
// //             Log in
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   )
// // }
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from 'lucide-react'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    setIsLoading(true)
    try {
      await register(email, password)
      toast.success('Account created successfully 🌸')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.message || 'Failed to create account')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center 
                    bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden">

      {/* 🔙 Back Arrow Button */}
      <div className="absolute top-4 left-4 z-20">
        <Button
          variant="outline"
          size="lg"
          className="p-3 rounded-full"
          onClick={() => navigate('/')}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Button>
      </div>

      {/* 🌟 Floating Stars */}
      <FloatingStar top="10%" left="10%" delay={0} />
      <FloatingStar top="25%" left="80%" delay={1.5} />
      <FloatingStar top="50%" left="20%" delay={3} />
      <FloatingStar top="75%" left="75%" delay={4.5} />
      <FloatingStar top="85%" left="40%" delay={6} />

      {/* ✨ Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-10 rounded-3xl shadow-2xl 
                   backdrop-blur-md bg-white/70 border border-white/30"
      >
        {/* Welcome Back Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-6 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Create Your Account 🌸
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="email" className="font-semibold">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl focus:ring-2 focus:ring-pink-400 transition-all"
            />
          </div>
          <div>
            <Label htmlFor="password" className="font-semibold">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-xl focus:ring-2 focus:ring-purple-400 transition-all"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="font-semibold">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* 🌈 Animated Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              type="submit"
              className="w-full py-3 rounded-full text-lg font-semibold 
                         bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                         text-white shadow-lg hover:scale-105 transition-transform"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Sign Up 🚀'}
            </Button>
          </motion.div>
        </form>

        <p className="text-center mt-6 text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  )
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
  )
}
