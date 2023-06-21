import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import axios from "axios";

const UserPage = () => {
  // const params = useParams();
  // const id = params.id;

  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [userDeleted, setUserDeleted] = useState(false);

  // useEffect(() => {
  //   fetch(`${API_URL}/users/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setUser(data);
  //     })
  // }, [id]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${API_URL}/users/${id}`);
      const data = await res.json();
      setUser(data)
    }    

    fetchData();
  }, [id]);

  if (!user) {
    return '';
  }
  
  const removeUserHandler = () => {
    axios.delete(`${API_URL}/users/${id}`)
      .then(res => setUserDeleted(true))
      .catch(err => setErrorMessage(err.message));
  }

  const deletedUserMessage = (
    <div className="deleted-message">
      <h1>User was deleted</h1>
      <Link to='/json/users'>Go back to all users</Link>
    </div>
  );

  const userElement = (
    <div>
      <h1>{user.name} info:</h1>
      <button onClick={removeUserHandler}>Delete</button>
      <Link to={`/json/users/edit/${user.id}`}>Edit</Link>

      {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}

      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>City: {user.address.city}</p>
    </div>
  );

  return (
    <Container>
      {userDeleted ? deletedUserMessage : userElement}
    </Container>
  )
}

export default UserPage;