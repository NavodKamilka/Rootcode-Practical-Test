import { Routes, Route ,BrowserRouter } from "react-router-dom"
import Post from './pages/Post.jsx'
import NewPost from './pages/NewPost.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/newPost" element={ <NewPost/> } />
          <Route path="/" element={ <Post/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
