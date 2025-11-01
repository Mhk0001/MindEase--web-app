// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Button } from '../components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
// import { Slider } from '../components/ui/slider'
// import { Textarea } from '../components/ui/textarea'
// import { toast } from 'react-hot-toast'
// import Garden from '../components/ui/garden'

// export default function Dashboard() {
//   const [currentMood, setCurrentMood] = useState(3)
//   const [checkInsData, setCheckInsData] = useState({ checkIns: [], stats: {} })
//   const [loading, setLoading] = useState(true)
//   const [journal, setJournal] = useState('')
//   const [aiFeedback, setAiFeedback] = useState('')

//   useEffect(() => {
//     fetchCheckIns()
//   }, [])

//   const fetchCheckIns = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/check-in`)
//       setCheckInsData(response.data)
//     } catch (error) {
//       console.error('Error fetching check-ins:', error)
//       toast.error('Failed to fetch check-ins')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleMoodSubmit = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_API_URL}/api/check-in`, {
//         mood: currentMood,
//         stressLevel: currentMood, 
//         journal: journal
//       })
//       toast.success('Mood recorded successfully')
//       fetchCheckIns() 
//       getAIFeedback() 
//     } catch (error) {
//       console.error('Error submitting mood:', error)
//       toast.error('Failed to record mood')
//     }
//   }

//   const getAIFeedback = async () => {
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/analyze/analyze`, {
//         mood: currentMood,
//         stressLevel: currentMood,
//         journal: journal
//       })
//       setAiFeedback(response.data.feedback)
//     } catch (error) {
//       console.error('Error getting AI feedback:', error)
//       toast.error('Failed to get AI feedback')
//     }
//   }

//   const moodData = checkInsData.checkIns?.map(checkIn => ({
//     date: new Date(checkIn.createdAt).toLocaleDateString(),
//     value: checkIn.mood
//   })) || []

//   if (loading) {
//     return <div className="text-center mt-8">Loading...</div>
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <main className="container mx-auto py-6 space-y-8">
//         {/* Mood & Journal Card */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-2xl">How are you feeling today?</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <label htmlFor="mood-slider" className="block text-sm font-medium text-gray-700">
//                   Rate your mood (1-5)
//                 </label>
//                 <Slider
//                   id="mood-slider"
//                   value={[currentMood]}
//                   onValueChange={(value) => setCurrentMood(value[0])}
//                   max={5}
//                   min={1}
//                   step={0.5}
//                 />
//                 <div className="text-center font-medium">{currentMood}</div>
//               </div>
//               <Textarea
//                 placeholder="Write about your thoughts and feelings..."
//                 value={journal}
//                 onChange={(e) => setJournal(e.target.value)}
//                 rows={4}
//               />
//               <Button onClick={handleMoodSubmit}>Submit</Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* AI Feedback */}
//         {aiFeedback && (
//           <Card>
//             <CardHeader>
//               <CardTitle>AI Feedback</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>{aiFeedback}</p>
//             </CardContent>
//           </Card>
//         )}

//         {/* Mood Trends */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Mood Trends</h2>
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle>Daily Mood</CardTitle>
//                 <div className="text-2xl font-bold">{checkInsData.stats.averageMood || '0.0'}</div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={moodData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis domain={[1, 5]} />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="value" stroke="#8884d8" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//  {/* <Garden/> */}
//   <div style={{ width: "100%", height: "100%" }}>
//       <Garden />
//     </div>

//         </div>
//       </main>
//     </div>
//   )
// }

import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import RelaxationGamesCard from '../components/RelaxationGamesCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

export default function Dashboard() {
  const [checkInsData, setCheckInsData] = useState({ checkIns: [], stats: {} })
  const [loading, setLoading] = useState(true)

  // ✨ Quotes by streak
  const streakQuotes = [
    "Great start! Keep the momentum going! 🌱",
    "Awesome! Two days in a row! 💜",
    "🔥 Three-day streak! You’re on fire!",
    "Fantastic! Four days of consistency 🌟",
    "💫 Five-day streak! Keep growing!",
    "🌈 Amazing! Your streak is impressive!",
    "🌸 You’re unstoppable! Keep it going!",
  ]

  // 🌿 Fetch check-ins
  useEffect(() => {
    fetchCheckIns()
  }, [])

  const fetchCheckIns = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/check-in`)
      setCheckInsData(response.data)
    } catch (error) {
      console.error('Error fetching check-ins:', error)
      toast.error('Failed to fetch dashboard data')
    } finally {
      setLoading(false)
    }
  }

  // 📊 Prepare mood data
  const moodData =
    checkInsData.checkIns?.map((checkIn) => ({
      date: new Date(checkIn.createdAt).toLocaleDateString(),
      mood: checkIn.mood,
    })) || []

  const moods = moodData.map((d) => d.mood)
  const averageMood =
    checkInsData.stats.averageMood ||
    (moods.length ? (moods.reduce((a, b) => a + b, 0) / moods.length).toFixed(1) : '—')
  const totalCheckIns = checkInsData.checkIns?.length || 0

  // 🔥 Current Streak
  const streakDays = useMemo(() => {
    if (moodData.length === 0) return 0
    let streak = 1
    for (let i = moodData.length - 1; i > 0; i--) {
      const curr = new Date(moodData[i].date)
      const prev = new Date(moodData[i - 1].date)
      const diff = (curr - prev) / (1000 * 60 * 60 * 24)
      if (diff === 1) streak++
      else if (diff > 1) return 0 // missed a day → reset streak
    }
    return streak
  }, [moodData])

  // 🌞 Best & 🌧️ Toughest Day
  const bestDay = useMemo(() => {
    if (moodData.length === 0) return { date: '—', mood: '—' }
    return moodData.reduce((a, b) => (a.mood > b.mood ? a : b))
  }, [moodData])

  const lowestDay = useMemo(() => {
    if (moodData.length === 0) return { date: '—', mood: '—' }
    return moodData.reduce((a, b) => (a.mood < b.mood ? a : b))
  }, [moodData])

  // 🗓️ Weekly Summary
  const weeklySummary = useMemo(() => {
    if (moodData.length < 14) return "Track for 2 weeks to unlock your weekly summary 🌱"

    const lastWeek = moodData.slice(-7)
    const prevWeek = moodData.slice(-14, -7)

    const avgLast = lastWeek.reduce((s, d) => s + d.mood, 0) / lastWeek.length
    const avgPrev = prevWeek.reduce((s, d) => s + d.mood, 0) / prevWeek.length
    const diff = (avgLast - avgPrev).toFixed(1)

    if (diff > 0)
      return `🌈 Your mood improved by ${diff} points this week — you’re glowing!`
    else if (diff < 0)
      return `💪 Mood dipped by ${Math.abs(diff)} points — small steps, big strength.`
    else return `🌿 Your mood stayed steady this week — calm and balanced.`
  }, [moodData])

  // 💬 Quote based on streak
  const quote = streakDays > 0 ? streakQuotes[Math.min(streakDays - 1, streakQuotes.length - 1)] : "Start your streak today! 🌱"

  if (loading) {
    return <div className="text-center mt-8 text-lg">Loading your dashboard...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100">
      <main className="container mx-auto py-10 space-y-10 px-4">

        {/* 🌿 Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-purple-700"
        >
          Your Wellness Dashboard 🌼
        </motion.h1>

        
        {/* 🌸 Summary Stats */}
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <Card className="rounded-2xl bg-white/70 backdrop-blur-md p-6 shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div>
      <h3 className="text-lg font-semibold text-purple-600">Average Mood</h3>
      <p className="text-2xl font-bold">{averageMood}</p>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold text-green-600">🌞 Best Day</h3>
      <p className="text-md font-bold">{bestDay.date}</p>
      <p className="text-sm text-gray-600">Mood: {bestDay.mood}</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-pink-600">🌧️ Toughest Day</h3>
      <p className="text-md font-bold">{lowestDay.date}</p>
      <p className="text-sm text-gray-600">Mood: {lowestDay.mood}</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-green-600">📅 Total Check-ins</h3>
      <p className="text-2xl font-bold">{totalCheckIns}</p>
    </div>

  </Card>
</motion.div>


        {/* 🗓️ Weekly Summary */}
        <Card className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 text-center mt-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">🗓️ Weekly Summary</h3>
          <p className="text-gray-700 text-lg">{weeklySummary}</p>
        </Card>

        {/* 💬 Streak + Motivational Quote */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="rounded-2xl shadow-lg border-none bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center py-10 px-6">
            <div className="flex flex-col items-center justify-center space-y-3">
              <h3 className="text-2xl font-semibold">🔥 Current Streak</h3>
              <p className="text-5xl font-bold">{streakDays} {streakDays === 1 ? 'day' : 'days'}</p>
              <p className="italic text-lg max-w-2xl mt-6">{quote}</p>
            </div>
          </Card>
        </motion.div>

        {/* 📈 Daily Mood Progress Chart (moved to end) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Mood Trends 📊</h2>
          <Card className="rounded-2xl bg-white/80 backdrop-blur-md shadow-md">
            <CardHeader>
              <CardTitle>Daily Mood Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[1, 5]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
<RelaxationGamesCard />
      </main>
    </div>
  )
}
