// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { format } from 'date-fns'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '../components/ui/table'
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
// import { Button } from '../components/ui/button'
// import { toast } from 'react-hot-toast'

// export default function Reports() {
//   const [checkIns, setCheckIns] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [selectedCheckIn, setSelectedCheckIn] = useState(null)

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

//   const getMoodEmoji = (mood) => {
//     if (mood >= 4) return '😊'
//     if (mood >= 3) return '😐'
//     return '😔'
//   }

//   if (loading) {
//     return <div className="text-center mt-8">Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Your Check-in History</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="rounded-md border">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Date</TableHead>
//                     <TableHead>Mood</TableHead>
//                     <TableHead>Stress Level</TableHead>
//                     <TableHead>Journal Entry</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {checkIns.map((checkIn) => (
//                     <TableRow key={checkIn._id}>
//                       <TableCell>
//                         {format(new Date(checkIn.createdAt), 'PPP')}
//                       </TableCell>
//                       <TableCell>
//                         {getMoodEmoji(checkIn.mood)} ({checkIn.mood}/5)
//                       </TableCell>
//                       <TableCell>{checkIn.stressLevel}/5</TableCell>
//                       <TableCell className="max-w-xs truncate">
//                         {checkIn.journal}
//                       </TableCell>
//                       <TableCell>
//                         <Button
//                           variant="ghost"
//                           onClick={() => setSelectedCheckIn(checkIn)}
//                         >
//                           View Details
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </CardContent>
//         </Card>

//         {selectedCheckIn && (
//           <Card>
//             <CardHeader>
//               <CardTitle>Check-in Details</CardTitle>
//               <div className="text-sm text-muted-foreground">
//                 {format(new Date(selectedCheckIn.createdAt), 'PPP')}
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div>
//                 <h3 className="font-medium">Mood</h3>
//                 <p>
//                   {getMoodEmoji(selectedCheckIn.mood)} ({selectedCheckIn.mood}/5)
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-medium">Stress Level</h3>
//                 <p>{selectedCheckIn.stressLevel}/5</p>
//               </div>
//               <div>
//                 <h3 className="font-medium">Journal Entry</h3>
//                 <p className="whitespace-pre-wrap">{selectedCheckIn.journal}</p>
//               </div>
//               <Button
//                 variant="outline"
//                 onClick={() => setSelectedCheckIn(null)}
//               >
//                 Close Details
//               </Button>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   )
// }



import { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { toast } from 'react-hot-toast'

export default function Reports() {
  const [checkIns, setCheckIns] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCheckIn, setSelectedCheckIn] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchCheckIns()
  }, [])

  const fetchCheckIns = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/check-in`)
      const data = Array.isArray(response.data) ? response.data : response.data.checkIns
      setCheckIns(data || [])
    } catch (error) {
      console.error('Error fetching check-ins:', error)
      toast.error('Failed to fetch check-ins')
    } finally {
      setLoading(false)
    }
  }

  const getMoodEmoji = (mood) => {
    if (mood >= 4) return '😊'
    if (mood >= 3) return '😐'
    return '😔'
  }

  const openModal = (checkIn) => {
    setSelectedCheckIn(checkIn)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedCheckIn(null)
    setIsModalOpen(false)
  }

  if (loading) {
    return <div className="text-center mt-8 text-lg text-gray-600">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 grid gap-6">

        {/* Check-in History Table */}
        <Card className="bg-white/80 backdrop-blur-md shadow-xl border border-white/30">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-2xl font-extrabold text-purple-700">
              Your Check-in History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-gray-200 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-100">
                    <TableHead>Date</TableHead>
                    <TableHead>Mood</TableHead>
                    <TableHead>Stress Level</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {checkIns.map((checkIn) => (
                    <TableRow
                      key={checkIn._id}
                      className="hover:bg-purple-50 transition-colors"
                    >
                      <TableCell>{format(new Date(checkIn.createdAt), 'PPP')}</TableCell>
                      <TableCell>{getMoodEmoji(checkIn.mood)} ({checkIn.mood}/5)</TableCell>
                      <TableCell>{checkIn.stressLevel}/5</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          className="text-purple-600 hover:text-purple-800"
                          onClick={() => openModal(checkIn)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Modal for Selected Check-in */}
        {isModalOpen && selectedCheckIn && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl p-6 w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto shadow-lg">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Check-in Details</h3>
              <p className="text-gray-500 mb-2">
                Date: {format(new Date(selectedCheckIn.createdAt), 'PPP')}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-purple-600">Mood:</span> {getMoodEmoji(selectedCheckIn.mood)} ({selectedCheckIn.mood}/5)
              </p>
              <p className="mb-4">
                <span className="font-semibold text-purple-600">Stress Level:</span> {selectedCheckIn.stressLevel}/5
              </p>
              <div className="mb-4">
                <span className="font-semibold text-purple-600">Journal Entry:</span>
                <p className="whitespace-pre-wrap mt-1">{selectedCheckIn.journal}</p>
              </div>
              <button
                className="w-full py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
