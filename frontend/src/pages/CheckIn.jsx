
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { Button } from '../components/ui/button'
// import { Label } from '../components/ui/label'
// import { Slider } from '../components/ui/slider'
// import { Textarea } from '../components/ui/textarea'
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
// import { toast } from 'react-hot-toast'
// import AIFeedback from '../components/AIFeedback'

// export default function CheckIn() {
//   const [mood, setMood] = useState(5)
//   const [stressLevel, setStressLevel] = useState(5)
//   const [journal, setJournal] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [aiFeedback, setAIFeedback] = useState('')
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [showGardenPrompt, setShowGardenPrompt] = useState(false)
//   const [selectedGardenVideos, setSelectedGardenVideos] = useState([])
//   const [selectedGames, setSelectedGames] = useState([])
//   const navigate = useNavigate()

//   // Determine garden videos based on mood
//   const getGardenExperience = (mood, stressLevel) => {
//   let videos = [];
//   let message = "";

//   // 🩵 Very Low Mood (1–2)
//   if (mood <= 2) {
//     if (stressLevel >= 4) {
//       videos = ['/Videos/Waterfall_Jungle.mp4'];
//       message = "Feeling overwhelmed? Relax with the jungle waterfall 🌧️🌿";
//     } else if (stressLevel >= 2.5) {
//       videos = ['/Videos/Grass.mp4'];
//       message = "Take a deep breath in this peaceful green garden 🌱";
//     } else {
//       videos = ['/Videos/mixtulips.mp4'];
//       message = "Soft tulips and gentle colors to lift your low mood 🌷✨";
//     }
//   }

//   // 🌸 Medium Mood (2.5–3.5)
//   else if (mood > 2 && mood <= 3.5) {
//     if (stressLevel >= 4) {
//       videos = ['/Videos/Waterfall_Jungle.mp4'];
//       message = "You’re doing your best — unwind by the waterfall 🌊";
//     } else if (stressLevel >= 3) {
//       videos = ['/Videos/mixtulips.mp4'];
//       message = "A mix of tulips to balance your emotions 🌸";
//     } else if (stressLevel >= 2) {
//       videos = ['/Videos/RedTulipsButterflies.mp4'];
//       message = "Calm your mind with butterflies and tulips 🦋🌷";
//     } else {
//       videos = ['/Videos/whitesunFlowers.mp4'];
//       message = "White sunflowers bring you peace and calm 🌼";
//     }
//   }

//   // 🌞 High Mood (4–5)
//   else if (mood > 3.5) {
//     if (stressLevel >= 4) {
//       videos = ['/Videos/Redflowers.mp4'];
//       message = "Even with high stress, stay strong like red flowers 🌹";
//     } else if (stressLevel >= 3) {
//       videos = ['/Videos/RedTulipsButterflies.mp4'];
//       message = "Keep the balance with vibrant tulips and butterflies 🦋✨";
//     } else if (stressLevel >= 2) {
//       videos = ['/Videos/whitesunFlowers.mp4'];
//       message = "You’re glowing with calm energy 🌼";
//     } else {
//       videos = ['/Videos/Sunflowers.mp4'];
//       message = "Pure sunshine! Keep that positivity shining ☀️🌻";
//     }
//   }

//   // 🌿 Fallback
//   if (videos.length === 0) {
//     videos = ['/Videos/Grass.mp4'];
//     message = "Here’s a soothing garden to help you relax 🌿";
//   }

//   return { videos, message };
// };


  

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       // Submit check-in
//       await axios.post(`${import.meta.env.VITE_API_URL}/api/check-in`, {
//         mood,
//         stressLevel,
//         journal
//       })

//       // Get AI feedback
//       const aiResponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/ai-analysis/analyze`, {
//         mood,
//         stressLevel,
//         journal
//       })

//       setAIFeedback(aiResponse.data.feedback)
//       toast.success('Check-in submitted successfully')
//       setIsSubmitted(true)
//       setShowGardenPrompt(true)
//       // select videos based on mood
//       setSelectedGames(getGamesForMood(mood)) // select games based on mood
//     } catch (error) {
//       console.error('Error submitting check-in:', error)
//       toast.error(error.response?.data?.message || 'Failed to submit check-in')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleNewCheckIn = () => {
//     setMood(5)
//     setStressLevel(5)
//     setJournal('')
//     setAIFeedback('')
//     setIsSubmitted(false)
//     setShowGardenPrompt(false)
//     setSelectedGardenVideos([])
//     setSelectedGames([])
//   }

//   const handleViewGarden = () => {
//     setShowGardenPrompt(false)
//   }

//   if (isSubmitted) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <Card className="max-w-2xl mx-auto">
//           <CardHeader>
//             <CardTitle className="text-3xl text-center">Check-in Submitted</CardTitle>
//             <CardDescription className="text-center">
//               Thank you for your check-in. Here's your AI feedback:
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <AIFeedback feedback={aiFeedback} />

//             {showGardenPrompt && (
//               <div className="text-center mt-4 space-x-4">
//                 <p className="mb-2">Want to visit a garden to uplift your mood?🌸</p>
//                 <Button onClick={handleViewGarden}>Yes</Button>
//                 <Button onClick={() => setShowGardenPrompt(false)} variant="outline">
//                   No
//                 </Button>
//               </div>
//             )}

//             {/* Mood Garden videos */}
//             {!showGardenPrompt && selectedGardenVideos.length > 0 && (
//               <div className="mt-6 space-y-4">
//                 <h3 className="text-xl text-center"></h3>
//                 {selectedGardenVideos.map((video, index) => (
//                   <video
//                     key={index}
//                     width="100%"
//                     controls
//                     autoPlay
//                     loop
//                     muted
//                   >
//                     <source src={video} type="video/mp4" />
//                   </video>
//                 ))}
//               </div>
//             )}

           
            

//             <div className="flex justify-center space-x-4 mt-6">
//               <Button onClick={handleNewCheckIn}>New Check-in</Button>
//               <Button onClick={() => navigate('/dashboard')} variant="outline">
//                 Go to Dashboard
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <Card className="max-w-2xl mx-auto">
//         <CardHeader>
//           <CardTitle className="text-3xl text-center">Daily Check-in</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="mood">How's your mood today? (1-5)</Label>
//               <Slider
//                 id="mood"
//                 min={1}
//                 max={5}
//                 step={0.5}
//                 value={[mood]}
//                 onValueChange={(value) => setMood(value[0])}
//                 className="mt-2"
//               />
//               <div className="text-center font-medium">{mood}</div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="stressLevel">What's your stress level? (1-5)</Label>
//               <Slider
//                 id="stressLevel"
//                 min={1}
//                 max={5}
//                 step={0.5}
//                 value={[stressLevel]}
//                 onValueChange={(value) => setStressLevel(value[0])}
//                 className="mt-2"
//               />
//               <div className="text-center font-medium">{stressLevel}</div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="journal">How are you feeling today?</Label>
//               <Textarea
//                 id="journal"
//                 placeholder="Write about your thoughts and feelings..."
//                 value={journal}
//                 onChange={(e) => setJournal(e.target.value)}
//                 className="min-h-[120px]"
//                 required
//               />
//             </div>
//             <Button 
//               type="submit" 
//               className="w-full"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Submitting...' : 'Submit Check-in'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from '../components/ui/button'
import { Label } from '../components/ui/label'
import { Slider } from '../components/ui/slider'
import { Textarea } from '../components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import AIFeedback from '../components/AIFeedback'

export default function CheckIn() {
  const [mood, setMood] = useState(5)
  const [stressLevel, setStressLevel] = useState(5)
  const [journal, setJournal] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [aiFeedback, setAIFeedback] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showGardenPrompt, setShowGardenPrompt] = useState(false)
  const [selectedGardenVideos, setSelectedGardenVideos] = useState([])
  const navigate = useNavigate()

  // 🌿 Garden video selection logic (same as before)
  const getGardenExperience = (mood, stressLevel) => {
    let videos = []
    let message = ''

    if (mood <= 2) {
      if (stressLevel >= 4) { videos = ['Videos/Waterfall_Jungle.mp4']; message = "Feeling overwhelmed? Relax with the jungle waterfall 🌧️🌿" }
      else if (stressLevel >= 2.5) { videos = ['Videos/Grass.mp4']; message = "Take a deep breath in this peaceful green garden 🌱" }
      else { videos = ['Videos/mixtulips.mp4']; message = "Soft tulips and gentle colors to lift your low mood 🌷✨" }
    } else if (mood > 2 && mood <= 3.5) {
      if (stressLevel >= 4) { videos = ['Videos/Waterfall_Jungle.mp4']; message = "You’re doing your best — unwind by the waterfall 🌊" }
      else if (stressLevel >= 3) { videos = ['Videos/mixtulips.mp4']; message = "A mix of tulips to balance your emotions 🌸" }
      else if (stressLevel >= 2) { videos = ['Videos/RedTulipsButterflies.mp4']; message = "Calm your mind with butterflies and tulips 🦋🌷" }
      else { videos = ['Videos/whitesunFlowers.mp4']; message = "White sunflowers bring you peace and calm 🌼" }
    } else if (mood > 3.5) {
      if (stressLevel >= 4) { videos = ['Videos/Redflowers.mp4']; message = "Even with high stress, stay strong like red flowers 🌹" }
      else if (stressLevel >= 3) { videos = ['Videos/RedTulipsButterflies.mp4']; message = "Keep the balance with vibrant tulips and butterflies 🦋✨" }
      else if (stressLevel >= 2) { videos = ['Videos/whitesunFlowers.mp4']; message = "You’re glowing with calm energy 🌼" }
      else { videos = ['Videos/Sunflowers.mp4']; message = "Pure sunshine! Keep that positivity shining ☀️🌻" }
    }

    if (videos.length === 0) { videos = ['Videos/Grass.mp4']; message = "Here’s a soothing garden to help you relax 🌿" }
    return { videos, message }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/check-in`, { mood, stressLevel, journal })
      const aiResponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/ai-analysis/analyze`, { mood, stressLevel, journal })
      setAIFeedback(aiResponse.data.feedback)
      toast.success('Check-in submitted successfully')
      setIsSubmitted(true)
      setShowGardenPrompt(true)

      // Select garden videos
      const { videos, message } = getGardenExperience(mood, stressLevel)
      setSelectedGardenVideos(videos)
      toast.success(message)
    } catch (error) {
      console.error(error)
      toast.error(error.response?.data?.message || 'Failed to submit check-in')
    } finally {
      setIsLoading(false)
    }
  }

  const handleNewCheckIn = () => {
    setMood(5)
    setStressLevel(5)
    setJournal('')
    setAIFeedback('')
    setIsSubmitted(false)
    setShowGardenPrompt(false)
    setSelectedGardenVideos([])
  }

  const handleViewGarden = () => {
    setShowGardenPrompt(false)
  }

  // 🌸 Submitted view
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 py-12">
        <main className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-8"
          >
            Check-in Submitted 🌼
          </motion.h1>

          <Card className="rounded-2xl bg-white/70 backdrop-blur-md shadow-md p-6 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">AI Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AIFeedback feedback={aiFeedback} />

              {showGardenPrompt && (
                <div className="text-center mt-4 space-x-4">
                  <p className="mb-2">Want to visit a garden to uplift your mood?🌸</p>
                  <Button onClick={handleViewGarden}>Yes</Button>
                  <Button onClick={() => setShowGardenPrompt(false)} variant="outline">No</Button>
                </div>
              )}

              {/* 🌿 Garden videos */}
              {!showGardenPrompt && selectedGardenVideos.length > 0 && (
                <div className="mt-6 space-y-6">
                  {selectedGardenVideos.map((video, idx) => (
                    <video
                      key={idx}
                      className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl shadow-xl"
                      controls
                      autoPlay
                      loop
                      muted
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  ))}
                </div>
              )}

              <div className="flex justify-center space-x-4 mt-6">
                <Button onClick={handleNewCheckIn}>New Check-in</Button>
                <Button onClick={() => navigate('/dashboard')} variant="outline">Go to Dashboard</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  // 🌸 Check-in form view
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 py-12">
      <main className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-8"
        >
          Daily Check-in 🌸
        </motion.h1>

        <Card className="rounded-2xl bg-white/70 backdrop-blur-md shadow-md max-w-3xl mx-auto p-6">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mood">How's your mood today? (1-5)</Label>
                <Slider
                  id="mood"
                  min={1}
                  max={5}
                  step={0.5}
                  value={[mood]}
                  onValueChange={(v) => setMood(v[0])}
                  className="mt-2"
                />
                <div className="text-center font-medium">{mood}</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stressLevel">What's your stress level? (1-5)</Label>
                <Slider
                  id="stressLevel"
                  min={1}
                  max={5}
                  step={0.5}
                  value={[stressLevel]}
                  onValueChange={(v) => setStressLevel(v[0])}
                  className="mt-2"
                />
                <div className="text-center font-medium">{stressLevel}</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="journal">How are you feeling today?</Label>
                <Textarea
                  id="journal"
                  placeholder="Write about your thoughts and feelings..."
                  value={journal}
                  onChange={(e) => setJournal(e.target.value)}
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Check-in'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
