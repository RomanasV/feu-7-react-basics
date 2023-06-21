import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../config";

import Container from "../../Components/Container/Container";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch(API_URL + '/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUsers(data);
  //     })
  // }, []);

  // useEffect(() => {
  //   axios.get(`${API_URL}/users`)
  //     .then(res => setUsers(res.data));
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${API_URL}/users`);
      setUsers(res.data)
    }
    
    fetchData();
  }, []);

  return (
    <Container>
      <Link to='/json/users/create'>Create New User</Link>
      <h1>Users:</h1>
      <ul>
        {users.map(user => (

          <li key={user.id}>
            <Link to={`/json/users/${user.id}`}>
              {user.id}. {user.name}
            </Link>
          </li>

        ))}
      </ul>
    </Container>
  )
}

export default UsersPage;