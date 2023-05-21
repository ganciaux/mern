import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register user" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});

const profileUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Profile user" });
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user" });
});

export { authUser, registerUser, logoutUser, profileUser, updateUser };
