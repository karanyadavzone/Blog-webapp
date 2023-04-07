 import { connectToDatabase, collection } from '../../db'; 
 async function handler(req, res) {
  const { title, author,content,category } = req.body;
 
   try {
     await connectToDatabase();
 
     const result = await collection.insertOne({
      title,
      author,
      content: content,
      category:category,
      date: new Date(),
    });
     res.status(201).json({ message: 'Document created successfully', documentId: result.insertedId });
   } catch (error) {
     res.status(500).json({ message: 'Error creating document' });
   }
 }
 
 

export default handler;
