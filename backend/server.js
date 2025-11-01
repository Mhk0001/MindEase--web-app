// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const rateLimit = require('express-rate-limit');
// const authRoutes = require('./routes/auth');
// const checkInRoutes = require('./routes/checkIn');
// const aiAnalysisRoutes = require('./routes/aiAnalysis');
// const { errorHandler } = require('./middleware/errorHandler');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100 // limit each IP to 100 requests per windowMs
// });
// app.use(limiter);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/check-in', checkInRoutes);
// app.use('/api/analyze', aiAnalysisRoutes);

// // Root route
// app.get('/', (req, res) => {
//   res.json({ message: 'Mental Health Check-in API' });
// });

// // Error handling middleware
// app.use(errorHandler);

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const rateLimit = require('express-rate-limit');

// // Import routes
// const authRoutes = require('./routes/auth');
// const checkInRoutes = require('./routes/checkIn');
// const aiAnalysisRoutes = require('./routes/aiAnalysis');
// const userRoutes = require('./routes/user'); // <-- here

// // Middleware
// const { errorHandler } = require('./middleware/errorHandler');

// dotenv.config();

// const app = express(); // <-- app must be initialized before using it
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Rate limiter (optional)
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100
// });
// app.use(limiter);

// // Attach routes **after app is initialized**
// app.use('/api/auth', authRoutes);
// app.use('/api/check-in', checkInRoutes);
// app.use('/api/ai-analysis', aiAnalysisRoutes);
// app.use('/api/user', userRoutes); // <-- here

// // Root route
// app.get('/', (req, res) => {
//   res.json({ message: 'Mental Health Check-in API' });
// });

// // Error handling middleware
// app.use(errorHandler);

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// // Connect MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
require('./cron/notifications'); // <-- this will start the cron job

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const checkInRoutes = require('./routes/checkIn');
const aiAnalysisRoutes = require('./routes/aiAnalysis');
const userRoutes = require('./routes/user');

const { errorHandler } = require('./middleware/errorHandler');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/check-in', checkInRoutes);
app.use('/api/ai-analysis', aiAnalysisRoutes);
app.use('/api/user', userRoutes); // <-- mount user routes here

app.get('/', (req, res) => res.json({ message: 'Mental Health Check-in API' }));

app.use(errorHandler);
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
