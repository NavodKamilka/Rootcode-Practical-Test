import express from 'express';
import cors from 'cors';
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log('Server Started', port);
});

app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);