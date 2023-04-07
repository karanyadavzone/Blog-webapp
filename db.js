// import mongoose from 'mongoose';

// const connectDB = handler => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     // Use current database connection
//     return handler(req, res);
//   }
//   // Create a new database connection
//   await mongoose.connect("mongodb+srv://gautam:gautam@cluster0.0mjb7.mongodb.net/?retryWrites=true&w=majority", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   });
//   return handler(req, res);
// }

// export default connectDB;
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://gautam:gautam@cluster0.0mjb7.mongodb.net/?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let collection;

async function connectToDatabase() {
  client = await MongoClient.connect(uri, options);
  collection = client.db('test').collection('blogs');
}

async function closeConnection() {
  await client.close();
}

export { connectToDatabase, closeConnection, collection };
