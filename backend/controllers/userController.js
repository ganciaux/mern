import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(`User ${email} already exists`);
  }

  const user = await User.create({
    name,
    password,
    email
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout user' });
});

const profileUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Profile user' });
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update user' });
});

export { authUser, registerUser, logoutUser, profileUser, updateUser };
