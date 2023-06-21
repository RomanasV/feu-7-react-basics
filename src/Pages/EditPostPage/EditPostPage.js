import { useNavigate, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

const EditPostPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [user, setUser] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/posts/${id}`)
      .then(res => {
        const post = res.data;

        setTitle(post.title);
        setBody(post.body);
        setUser(post.userId);
      })
  }, [id]);

  useEffect(() => {
    axios.get(`${API_URL}/users`)
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  const titleHandler = event => setTitle(event.target.value);
  const bodyHandler = event => setBody(event.target.value);
  const userHandler = event => setUser(event.target.value);

  const editPostHandler = (event) => {
    event.preventDefault();

    // fetch(`${API_URL}/posts/${id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({
    //     id,
    //     title,
    //     body,
    //     userId: Number(user),
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    const upradetPost = {
      id,
      title,
      body,
      userId: Number(user),
    }

    axios.put(`${API_URL}/posts/${id}`, upradetPost)
      .then(res => {
        setErrorMessage('');
        navigate('/json/posts/' + id);
      })
      .catch(err => setErrorMessage(err.message));
  }
  
  return (
    <Container>
      <form onSubmit={editPostHandler}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={titleHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="body">Body:</label>
          <textarea id="body" name="body" rows="5" cols="30" value={body} onChange={bodyHandler}></textarea>
        </div>

        <div className="form-control">
          <label htmlFor="user">User:</label>
          <select id="user" name="user" value={user} onChange={userHandler}>
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
        </div>

        <input type="submit" value="Edit post" />
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </Container>
  )
}

export default EditPostPage;