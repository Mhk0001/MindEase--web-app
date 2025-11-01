// import { useState, useEffect } from 'react'
// import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
// import axios from 'axios'
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
// import { Button } from '../components/ui/button'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { toast } from 'react-hot-toast'

// function getMoodColor(mood) {
//   if (mood >= 4) return 'bg-green-500'
//   if (mood >= 3) return 'bg-yellow-500'
//   if (mood >= 2) return 'bg-orange-500'
//   return 'bg-red-500'
// }

// export default function Calendar() {
//   const [currentDate, setCurrentDate] = useState(new Date())
//   const [checkIns, setCheckIns] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetchCheckIns()
//   }, [])

//   const fetchCheckIns = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/check-in`)
//       setCheckIns(response.data.checkIns)
//     } catch (error) {
//       console.error('Error fetching check-ins:', error)
//       toast.error('Failed to fetch check-ins')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const monthStart = startOfMonth(currentDate)
//   const monthEnd = endOfMonth(currentDate)
//   const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

//   const previousMonth = () => {
//     setCurrentDate(date => new Date(date.getFullYear(), date.getMonth() - 1, 1))
//   }

//   const nextMonth = () => {
//     setCurrentDate(date => new Date(date.getFullYear(), date.getMonth() + 1, 1))
//   }

//   if (loading) {
//     return <div className="text-center mt-8">Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-2xl font-bold">
//             {format(currentDate, 'MMMM yyyy')}
//           </CardTitle>
//           <div className="space-x-2">
//             <Button onClick={previousMonth} variant="outline" size="icon">
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <Button onClick={nextMonth} variant="outline" size="icon">
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-7 gap-2 text-center">
//             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//               <div key={day} className="font-bold">{day}</div>
//             ))}
//             {monthDays.map(day => {
//               const checkIn = checkIns.find(ci => 
//                 isSameDay(new Date(ci.createdAt), day)
//               )
//               return (
//                 <div
//                   key={day.toString()}
//                   className={`p-2 border rounded-md ${
//                     isSameMonth(day, currentDate) ? '' : 'text-gray-400'
//                   } ${checkIn ? getMoodColor(checkIn.mood) : ''}`}
//                 >
//                   <span className="font-semibold">{format(day, 'd')}</span>
//                   {checkIn && (
//                     <div className="mt-1 text-xs">
//                       Mood: {checkIn.mood}/5
//                     </div>
//                   )}
//                 </div>
//               )
//             })}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
import { useState, useEffect } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'

function getMoodColor(mood) {
  if (mood >= 4) return 'bg-green-500'
  if (mood >= 3) return 'bg-yellow-500'
  if (mood >= 2) return 'bg-orange-500'
  return 'bg-red-500'
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [checkIns, setCheckIns] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCheckIns()
  }, [])

  const fetchCheckIns = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/check-in`)
      setCheckIns(response.data.checkIns)
    } catch (error) {
      console.error('Error fetching check-ins:', error)
      toast.error('Failed to fetch check-ins')
    } finally {
      setLoading(false)
    }
  }

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const previousMonth = () => {
    setCurrentDate(date => new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(date => new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  if (loading) {
    return <div className="text-center mt-8 text-lg">Loading...</div>
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-8 overflow-hidden">
      
      {/* 🌸 Floating decorative shapes */}
      <motion.div
        className="absolute w-40 h-40 bg-pink-300 rounded-full opacity-30 top-10 left-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-purple-300 rounded-full opacity-25 top-1/3 right-16"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-blue-300 rounded-full opacity-20 bottom-10 left-20"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container mx-auto px-4">
        <Card className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">
              {format(currentDate, 'MMMM yyyy')}
            </CardTitle>
            <div className="space-x-2">
              <Button onClick={previousMonth} variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button onClick={nextMonth} variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="font-bold">{day}</div>
              ))}
              {monthDays.map(day => {
                const checkIn = checkIns.find(ci => 
                  isSameDay(new Date(ci.createdAt), day)
                )
                return (
                  <div
                    key={day.toString()}
                    className={`p-2 border rounded-md ${
                      isSameMonth(day, currentDate) ? '' : 'text-gray-400'
                    } ${checkIn ? getMoodColor(checkIn.mood) : ''}`}
                  >
                    <span className="font-semibold">{format(day, 'd')}</span>
                    {checkIn && (
                      <div className="mt-1 text-xs">
                        Mood: {checkIn.mood}/5
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
