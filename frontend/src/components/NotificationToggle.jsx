// // src/components/NotificationToggle.jsx
// import { useState, useEffect } from 'react';
// import { Bell } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';
// import { toast } from 'react-hot-toast';
// import axios from 'axios';

// export default function NotificationToggle() {
//   const { user } = useAuth();
//   const [enabled, setEnabled] = useState(false);

//   // Initialize toggle state from user object
//   useEffect(() => {
//     if (user && typeof user.notificationsEnabled !== 'undefined') {
//       setEnabled(user.notificationsEnabled);
//     }
//   }, [user]);

//   const toggleNotifications = async () => {
//     try {
//       const res = await axios.patch(
//         `${import.meta.env.VITE_API_URL}/api/user/notifications`,
//         { enabled: !enabled } // send the new value
//       );
//       setEnabled(res.data.notificationsEnabled);
//       toast.success(`Notifications ${res.data.notificationsEnabled ? 'enabled' : 'disabled'} ✅`);
//     } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.error || 'Failed to update notifications');
//     }
//   };

//   return (
//     <button onClick={toggleNotifications}>
//       <Bell className={`h-5 w-5 ${enabled ? 'text-green-500' : 'text-gray-400'}`} />
//     </button>
//   );
// }
import { useState } from 'react';
import { Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export default function NotificationToggle() {
  const { user, setUser } = useAuth(); // add setUser
  const [enabled, setEnabled] = useState(user?.notificationsEnabled || false);

  const toggleNotifications = async () => {
    try {
      const res = await axios.patch('/api/user/notifications', {
        enabled: !enabled
      });
      setEnabled(res.data.notificationsEnabled);
      setUser(prev => ({ ...prev, notificationsEnabled: res.data.notificationsEnabled }));
      toast.success(`Notifications ${!enabled ? 'enabled' : 'disabled'} ✅`);
    } catch (err) {
      console.error(err);
      toast.error('Failed to update notifications');
    }
  };

  return (
    <button onClick={toggleNotifications}>
      <Bell className={`h-5 w-5 ${enabled ? 'text-green-500' : 'text-gray-400'}`} />
    </button>
  );
}
