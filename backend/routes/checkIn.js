// const express = require('express');
// const Joi = require('joi');
// const CheckIn = require('../models/CheckIn');
// const { authenticateToken } = require('../middleware/auth');

// const router = express.Router();

// // Validation schema
// const checkInSchema = Joi.object({
//   mood: Joi.number().min(1).max(10).required(),
//   stressLevel: Joi.number().min(1).max(10).required(),
//   journal: Joi.string().required(),
// });

// // Create check-in
// router.post('/', authenticateToken, async (req, res) => {
//   try {
//     // Validate request body
//     const { error } = checkInSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }

//     const { mood, stressLevel, journal } = req.body;
//     const checkIn = new CheckIn({
//       user: req.user.userId,
//       mood,
//       stressLevel,
//       journal,
//     });
    
//     await checkIn.save();
//     res.status(201).json(checkIn);
//   } catch (error) {
//     console.error('Error creating check-in:', error);
//     res.status(500).json({ message: 'Error creating check-in', error: error.message });
//   }
// });

// // Get user's check-ins
// router.get('/', authenticateToken, async (req, res) => {
//   try {
//     const checkIns = await CheckIn.find({ user: req.user.userId })
//       .sort({ createdAt: -1 })
//       .lean();

//     // Calculate statistics
//     const totalMood = checkIns.reduce((sum, checkIn) => sum + checkIn.mood, 0);
//     const totalStress = checkIns.reduce((sum, checkIn) => sum + checkIn.stressLevel, 0);
//     const averageMood = checkIns.length > 0 ? (totalMood / checkIns.length).toFixed(1) : 0;
//     const averageStress = checkIns.length > 0 ? (totalStress / checkIns.length).toFixed(1) : 0;

//     res.json({
//       checkIns: checkIns,
//       stats: {
//         averageMood,
//         averageStress,
//         totalCheckIns: checkIns.length
//       }
//     });
//   } catch (error) {
//     console.error('Error fetching check-ins:', error);
//     res.status(500).json({ message: 'Error fetching check-ins', error: error.message });
//   }
// });

// module.exports = router;




// const express = require('express'); 
// const Joi = require('joi');
// const CheckIn = require('../models/CheckIn');
// const { authenticateToken } = require('../middleware/auth');

// const router = express.Router();

// // Validation schema
// const checkInSchema = Joi.object({
//   mood: Joi.number().min(1).max(10).required(),
//   stressLevel: Joi.number().min(1).max(10).required(),
//   journal: Joi.string().required(),
// });

// // Create check-in
// router.post('/', authenticateToken, async (req, res) => {
//   try {
//     const { error } = checkInSchema.validate(req.body);
//     if (error) return res.status(400).json({ message: error.details[0].message });

//     const { mood, stressLevel, journal } = req.body;
//     const checkIn = new CheckIn({
//       user: req.user.id,
//       mood,
//       stressLevel,
//       journal,
//     });

//     await checkIn.save();
//     res.status(201).json({ success: true, checkIn });
//   } catch (error) {
//     console.error('Error creating check-in:', error);
//     res.status(500).json({ message: 'Error creating check-in', error: error.message });
//   }
// });

// // Get user's check-ins
// router.get('/', authenticateToken, async (req, res) => {
//   try {
//     const checkIns = await CheckIn.find({ user: req.user.id }).sort({ createdAt: -1 }).lean();
//     const totalMood = checkIns.reduce((sum, c) => sum + c.mood, 0);
//     const totalStress = checkIns.reduce((sum, c) => sum + c.stressLevel, 0);
//     const averageMood = checkIns.length ? (totalMood / checkIns.length).toFixed(1) : 0;
//     const averageStress = checkIns.length ? (totalStress / checkIns.length).toFixed(1) : 0;
// console.log("Fetched check-ins for user:", req.user.id, "Count:", checkIns.length);

//     res.json({
//       success: true,
//       checkIns,
//       stats: { averageMood, averageStress, totalCheckIns: checkIns.length }
//     });
//   } catch (error) {
//     console.error('Error fetching check-ins:', error);
//     res.status(500).json({ message: 'Error fetching check-ins', error: error.message });
//   }
// });

// module.exports = router;





const express = require('express'); 
const Joi = require('joi');
const CheckIn = require('../models/CheckIn');
const { authenticateToken } = require('../middleware/auth');
const sendEmail = require('../utils/email'); // your existing nodemailer function

const router = express.Router();

// Validation schema
const checkInSchema = Joi.object({
  mood: Joi.number().min(1).max(10).required(),
  stressLevel: Joi.number().min(1).max(10).required(),
  journal: Joi.string().required(),
});

// Create check-in
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { error } = checkInSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { mood, stressLevel, journal } = req.body;
    const checkIn = new CheckIn({
      user: req.user.id,
      mood,
      stressLevel,
      journal,
    });

    await checkIn.save();

    // Send "Thank you" email after check-in
    try {
      await sendEmail({
        to: req.user.email,
        subject: 'Thanks for your daily check-in 🌱',
        text: `Hi ${req.user.email.split('@')[0]},\n\nThanks for submitting your check-in today! 🌼\n\nMood: ${mood}\nStress Level: ${stressLevel}\n\nKeep taking care of yourself — you’re doing great 💚\n\n- Team MindEase`,
      });
      console.log(`Thank you email sent to ${req.user.email}`);
    } catch (emailError) {
      console.error('Error sending check-in email:', emailError);
    }

    res.status(201).json({ success: true, checkIn });
  } catch (error) {
    console.error('Error creating check-in:', error);
    res.status(500).json({ message: 'Error creating check-in', error: error.message });
  }
});

// Get user's check-ins
router.get('/', authenticateToken, async (req, res) => {
  try {
    const checkIns = await CheckIn.find({ user: req.user.id }).sort({ createdAt: -1 }).lean();
    const totalMood = checkIns.reduce((sum, c) => sum + c.mood, 0);
    const totalStress = checkIns.reduce((sum, c) => sum + c.stressLevel, 0);
    const averageMood = checkIns.length ? (totalMood / checkIns.length).toFixed(1) : 0;
    const averageStress = checkIns.length ? (totalStress / checkIns.length).toFixed(1) : 0;

    // console.log("Fetched check-ins for user:", req.user.id, "Count:", checkIns.length);

    res.json({
      success: true,
      checkIns,
      stats: { averageMood, averageStress, totalCheckIns: checkIns.length }
    });
  } catch (error) {
    console.error('Error fetching check-ins:', error);
    res.status(500).json({ message: 'Error fetching check-ins', error: error.message });
  }
});

module.exports = router;
