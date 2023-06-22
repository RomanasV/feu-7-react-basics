import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(postsData => setPosts(postsData));
  }, []);

  return (
    <Container>
      <button onClick={() => toast("Hello")}>Click</button>
      <Link to='/json/posts/create'>Create a new post</Link>
      <ul>
        {posts.map(post => <li key={post.id}><Link to={'/json/posts/' + post.id}>{post.id}. {post.title}</Link></li>)}
      </ul>
    </Container>
  )
}

export default PostsPage;