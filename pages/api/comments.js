const comments = [];

export default (req, res) => {
  if (req.method === "POST") {
    const { postId, name, comment } = req.body;
    const newComment = { postId, name, comment, id: comments.length + 1 };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else if (req.method === "GET") {
    const postId = parseInt(req.query.postId);
    const postComments = comments.filter((c) => c.postId === postId);
    res.status(200).json(postComments);
  }
};
