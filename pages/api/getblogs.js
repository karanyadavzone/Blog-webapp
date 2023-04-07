import { connectToDatabase, collection } from '../../db';

async function handler(req, res) {
  await connectToDatabase();
  const data = await collection.find().toArray();
  res.status(200).json(data);
}

export default handler;
