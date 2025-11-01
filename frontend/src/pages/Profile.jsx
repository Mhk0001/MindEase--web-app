// import { useState, useEffect } from 'react'
// import { useAuth } from '../context/AuthContext'
// import { Button } from '../components/ui/button'
// import { Input } from '../components/ui/input'
// import { Label } from '../components/ui/label'
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
// import { toast } from 'react-hot-toast'
// import axios from 'axios'

// export default function Profile() {
//   const { user, logout } = useAuth()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/auth/profile')
//         setEmail(response.data.email)
//       } catch (error) {
//         console.error('Error fetching user profile:', error)
//         toast.error('Failed to fetch user profile')
//       }
//     }

//     fetchUserProfile()
//   }, [])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match')
//       return
//     }

//     setIsLoading(true)
//     try {
//       await axios.put('http://localhost:5000/api/auth/profile', { email, password })
//       toast.success('Profile updated successfully')
//       setPassword('')
//       setConfirmPassword('')
//     } catch (error) {
//       console.error('Error updating profile:', error)
//       toast.error('Failed to update profile')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <Card className="max-w-md mx-auto">
//         <CardHeader>
//           <CardTitle>Your Profile</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="password">New Password (leave blank to keep current)</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div>
//               <Label htmlFor="confirmPassword">Confirm New Password</Label>
//               <Input
//                 id="confirmPassword"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>
//             <Button type="submit" className="w-full" disabled={isLoading}>
//               {isLoading ? 'Updating...' : 'Update Profile'}
//             </Button>
//           </form>
//           <Button variant="outline" className="w-full mt-4" onClick={logout}>
//             Logout
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { toast } from 'react-hot-toast'
import axios from 'axios'

export default function Profile() {
  const { user, logout } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/profile`)
        setEmail(response.data.email)
      } catch (error) {
        console.error('Error fetching user profile:', error)
        toast.error('Failed to fetch user profile')
      }
    }

    fetchUserProfile()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    setIsLoading(true)
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/auth/profile`, { email, password })
      toast.success('Profile updated successfully')
      setPassword('')
      setConfirmPassword('')
    } catch (error) {
      console.error('Error updating profile:', error)
      toast.error('Failed to update profile')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center py-12">
      <Card className="max-w-md w-full bg-white/80 backdrop-blur-md shadow-xl border border-white/30 p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-purple-700 mb-1">Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <Label htmlFor="email" className="text-purple-600 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/70 backdrop-blur-sm placeholder-purple-200"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="text-purple-600 font-medium">New Password (leave blank to keep current)</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/70 backdrop-blur-sm placeholder-purple-200"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-purple-600 font-medium">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-white/70 backdrop-blur-sm placeholder-purple-200"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update Profile'}
            </Button>
          </form>
          <Button
            variant="outline"
            className="w-full mt-4 border-purple-600 text-purple-600 hover:bg-purple-50"
            onClick={logout}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
