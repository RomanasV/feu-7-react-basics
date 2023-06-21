import { useNavigate, useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { BeatLoader } from "react-spinners";
import UserForm from "../../Components/UserForm/UserForm";

const EditUserPage = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => setErrorMessage(err.message));
  }, [id]);

  if (!user && !errorMessage) {
    return <BeatLoader color="#232cdb" />;
  }

  const updateUserHandler = (userData) => {
    axios.put(`${API_URL}/users/${id}`, userData)
      .then(res => navigator(`/json/users/${id}`))
      .catch(err => console.log(err));
  }

  return (
    <Container>
      {errorMessage ? <p>{errorMessage}</p> : <UserForm initialData={user} onUserFormSubmit={updateUserHandler} />}
    </Container>
  )
}

export default EditUserPage;