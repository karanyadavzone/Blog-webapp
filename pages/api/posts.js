import connectDB from '../../utils/db';
import Post from '../../models/Blogs';

const handler = async (req, res) => {
    if (req.method === 'POST') {
      try {
        const { title, author,content } = req.body;
        const post = new Post({ title,author, content });
        const result = await post.save();
        res.status(201).json(result);
      } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
      }
    } else {
      res.status(400).json({ message: 'Invalid request method' });
    }
  };


 export default connectDB(handler);
