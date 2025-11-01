const cron = require('node-cron');
const User = require('../models/User'); // your User model
const sendEmail = require('../utils/email'); // your nodemailer function

// Schedule: Every minute for testing
cron.schedule('0 12 * * *', async () => {
  try {
    console.log('Running daily notification job...');
    
    // Find all users with notifications enabled
    const users = await User.find({ notificationsEnabled: true });

    if (!users.length) {
      console.log('No users with notifications enabled today.');
      return;
    }

    // Send notification to each user
    for (const user of users) {
      await sendEmail({
        to: user.email,
        subject: 'Daily Mental Health Reminder',
        text: `Hello! Just a gentle reminder to check in with your mental health today 😊`
      });
      console.log(`Notification sent to ${user.email}`);
    }
  } catch (err) {
    console.error('Error running notification job:', err);
  }
});
