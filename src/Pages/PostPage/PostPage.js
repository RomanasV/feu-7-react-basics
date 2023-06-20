import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [postDeleted, setPostDeleted] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/posts/${id}?_expand=user`)
      .then(res => setPost(res.data));
  }, [id]);

  const deleteHandler = () => {
    // fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' })
    //   .then(res => res.json())
    //   .then(data => setPostDeleted(true));

    axios.delete(`${API_URL}/posts/${id}`)
      .then(data => setPostDeleted(true))
  }

  return (
    <Container>
      {postDeleted ? (
        <>
          <h1>Post was deleted</h1>
          <Link to='/json/posts'>Go back to posts list</Link>
        </>
      ) : (
        post && (
          <>
            <h1>{post.title}</h1>
            <button onClick={deleteHandler}>Delete Post</button>
            <Link to={`/json/posts/edit/${post.id}`}>Edit Post</Link>
            <p>{post.body}</p>
            <span>Author: {post.user.name}</span>
          </>
        )
      )}

    </Container>
  )
}

export default PostPage;