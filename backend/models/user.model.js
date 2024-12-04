// import mongoose from "mongoose";
// import validator from "validator";
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     validate: [validator.isEmail, "Please enter a valid email"],
//   },
//   phone: {
//     type: Number,
//     required: true,
//     unique: true,
//   },
//   // photo: {
//   //   public_id: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   url: {
//   //     type: String,
//   //     required: true,
//   //   },
//   // },
//   // education: {
//   //   type: String,
//   //   required: true,
//   // },
//   // role: {
//   //   type: String,
//   //   required: true,
//   //   enum: ["user", "admin"],
//   // },
//   password: {
//     type: String,
//     required: true,
//     select: false,
//     minlength: 8,
//   },
//   token: {
//     type: String,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
// export const User = mongoose.model("User", userSchema);


import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,  // Changed to String for better flexibility with phone formats
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8,
  },
  token: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);  // Hash password with 12 rounds
  }
  next();
});

// Method to compare password during login
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);  // Compare the hashed passwords
};

export const User = mongoose.model("User", userSchema);

