import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { toast } from "react-toastify";

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  
  const [commentTitle, setCommentTitle] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentBody, setCommentBody] = useState('');

  const [editCommentId, setEditCommentId] = useState(null);

  const [postDeleted, setPostDeleted] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/posts/${id}?_expand=user&_embed=comments`)
      .then(res => {
        setComments(res.data.comments.toReversed());
        setPost(res.data);
      });
  }, [id]);

  const deleteHandler = () => {
    // fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' })
    //   .then(res => res.json())
    //   .then(data => setPostDeleted(true));

    axios.delete(`${API_URL}/posts/${id}`)
      .then(data => setPostDeleted(true))
  }

  const commentTitleHandler = event => setCommentTitle(event.target.value);
  const commentEmailHandler = event => setCommentEmail(event.target.value);
  const commentBodyHandler = event => setCommentBody(event.target.value);

  const commentFormHandler = event => {
    event.preventDefault()

    const commentObj = {
      name: commentTitle,
      body: commentBody,
      email: commentEmail,
      postId: Number(id),
    }

    if (editCommentId) {
      commentObj.id = editCommentId;

      axios.put(`${API_URL}/comments/${editCommentId}`, commentObj)
        .then(res => {
          const editCommentIndex = comments.findIndex(comment => comment.id === editCommentId);

          setComments(prevState => prevState.toSpliced(editCommentIndex, 1, res.data));
          toast.success('Comment was edited');
          setEditCommentId(null);
          setCommentTitle('');
          setCommentBody('');
          setCommentEmail('');
        })
        .catch(err => toast.error(err.message))

      return;
    }

    axios.post(`${API_URL}/comments`, commentObj)
      .then(res => {
        setComments(prevState => [res.data, ...prevState]);
        toast.success('Comment was created');
      })
      .catch(err => toast.error(err.message))
  }

  const editCommentHandler = commentId => {
    setEditCommentId(commentId);
    const commentObject = comments.find(comment => comment.id === commentId);

    setCommentTitle(commentObject.name);
    setCommentBody(commentObject.body);
    setCommentEmail(commentObject.email);
  }
  
  const deleteCommentHandler = commentId => {
    axios.delete(`${API_URL}/comments/${commentId}`)
      .then(res => {
        const removeCommentIndex = comments.findIndex(comment => comment.id === commentId);
        
        setComments(prevState => prevState.toSpliced(removeCommentIndex, 1));

        toast.success('Comment was deleted')
      })
      .catch(err => toast.error(err.message));
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
          <div>
            <h1>{post.title}</h1>
            <button onClick={deleteHandler}>Delete Post</button>
            <Link to={`/json/posts/edit/${post.id}`}>Edit Post</Link>
            <p>{post.body}</p>
            <span>Author: {post.user.name}</span>
          </div>
        )
      )}

      {comments && comments.length > 0 && (
        <div className="posts-list">
          <h2>Comments:</h2>

          <form onSubmit={commentFormHandler} noValidate>
            <div className="form-control">
              <label htmlFor="comment-title">Title</label>
              <input type="text" name="comment-title" id="comment-title" value={commentTitle} onChange={commentTitleHandler} />
            </div>

            <div className="form-control">
              <label htmlFor="comment-email">Email</label>
              <input type="email" name="comment-email" id="comment-email" value={commentEmail} onChange={commentEmailHandler} />
            </div>

            <div className="form-control">
              <label htmlFor="comment-body">Body</label>
              <textarea name="comment-body" id="comment-body" value={commentBody} onChange={commentBodyHandler} />
            </div>

            <button type="submit">{editCommentId ? 'Edit a comment' : 'Create a comment'}</button>
          </form>

          {comments.map(comment => (
            <div key={comment.id} className="post-item">
              <h3>{comment.id}. {comment.name}</h3>
              <span>Author email: {comment.email}</span>
              <p>{comment.body}</p>
              <button onClick={() => editCommentHandler(comment.id)}>Edit</button>
              <button onClick={() => deleteCommentHandler(comment.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}

    </Container>
  )
}

export default PostPage;