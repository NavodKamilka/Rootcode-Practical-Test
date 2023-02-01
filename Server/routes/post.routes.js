import express from 'express';
import {
  addPost,
  getAllPost,
  getPostById
//   updateQuantity,
//   editProduct,
//   getProductById,
//   getAllProducts,
//   toggleProduct,
//   getProductsByName,
//   getProductByCategory,
//   filterDiscountedProducts,
//   filterProductBySize,
} from '../controllers/post.controllers.js';

const postRoutes = express.Router();

postRoutes.post('/add', addPost);
postRoutes.get('/get/:id', getPostById);
postRoutes.get('/getAll', getAllPost);


export default postRoutes;
