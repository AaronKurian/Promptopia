import mongoose from 'mongoose';

let isConnected = false; // Track the connection state

export const connectToDB = async () => {
  mongoose.set('strictQuery', true); // Enable strict query mode

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
