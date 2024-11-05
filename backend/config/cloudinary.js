import { v2 as cloudinary } from "cloudinary";

// Function to connect and configure Cloudinary
const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY, // Corrected this line to use 'api_secret'
  });
};

export default connectCloudinary;
