// // const mongoose = require('mongoose');
// // const bcrypt = require('bcryptjs');

// // const userSchema = new mongoose.Schema({
// //   email: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //     lowercase: true,
// //     trim: true,
// //   },
// //   password: {
// //     type: String,
// //     required: true,
// //   },
// // }, { timestamps: true });

// // userSchema.pre('save', async function (next) {
// //   if (!this.isModified('password')) return next();
// //   this.password = await bcrypt.hash(this.password, 12);
// //   next();
// // });

// // userSchema.methods.comparePassword = async function (candidatePassword) {
// //   return bcrypt.compare(candidatePassword, this.password);
// // };

// // const User = mongoose.model('User', userSchema);

// // module.exports = User;


// // const userSchema = new mongoose.Schema({
// //   email: { type: String, required: true, unique: true, lowercase: true, trim: true },
// //   password: { type: String, required: true },
// // }, { timestamps: true });

// // // Hash password before saving
// // userSchema.pre('save', async function(next) {
// //   if (!this.isModified('password')) return next();
// //   this.password = await bcrypt.hash(this.password, 12);
// //   next();
// // });

// // // Compare password method
// // userSchema.methods.comparePassword = async function(candidatePassword) {
// //   return bcrypt.compare(candidatePassword, this.password);
// // };

// // module.exports = mongoose.model('User', userSchema);



// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// // const userSchema = new mongoose.Schema({
// //   email: { type: String, required: true, unique: true, lowercase: true, trim: true },
// //   password: { type: String, required: true },
// //   notificationsEnabled: { type: Boolean, default: true },
// // }, { timestamps: true });
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true, lowercase: true, trim: true },
//   password: { type: String, required: true },
//   notificationsEnabled: { type: Boolean, default: false }, // <-- add this line
// }, { timestamps: true });


// // Hash password before saving
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// // Compare password method
// userSchema.methods.comparePassword = async function(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  notificationsEnabled: { type: Boolean, default: false }, // add this
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
