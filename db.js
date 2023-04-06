import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current database connection
    return handler(req, res);
  }
  // Create a new database connection
  await mongoose.connect("mongodb+srv://gautam:gautam@cluster0.0mjb7.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true
  });
  return handler(req, res);
}

export default connectDB;
