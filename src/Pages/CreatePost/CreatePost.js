import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import axios from "axios";
import { API_URL } from "../../config";

const CreatePost = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/users`)
      .then(res => {
        setUser(res.data[0].id);
        setUsers(res.data);
      });
  }, []);

  const titleHandler = event => setTitle(event.target.value);
  const bodyHandler = event => setBody(event.target.value);
  const userHandler = event => setUser(event.target.value);

  const newPostHandler = (event) => {
    event.preventDefault();

    // fetch(`${API_URL}/posts`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: title,
    //     body: body,
    //     userId: Number(user),
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    // const newPost = {
    //   title: title,
    //   body: body,
    //   userId: Number(user),
    // }

    // fetch(`${API_URL}/posts`, {
    //   method: 'POST',
    //   body: JSON.stringify(newPost),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    // axios.post(`${API_URL}/posts`, {
    //   title: title,
    //   body: body,
    //   userId: Number(user)
    // }).then(res => console.log(res.data));

    const newPost = {
      title: title,
      body: body,
      userId: Number(user)
    };

    axios.post(`${API_URL}/posts`, newPost)
      .then(res => console.log(res.data));
  }

  return (
    <Container>
      <form onSubmit={newPostHandler}>
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

        <input type="submit" value="Create new post" />
      </form>
    </Container>
  )
}

export default CreatePost;