import { useState } from "react";
import Container from "../../Components/Container/Container";
import axios from "axios";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import UserForm from "../../Components/UserForm/UserForm";
import { toast } from "react-toastify";

const CreateUserPage = () => {
  const navigator = useNavigate();

  const [formErrorMessage, setFormErrorMessage] = useState('');

  const newUserHandler = (newUserData) => {
    axios.post(`${API_URL}/users`, newUserData)
      .then(res => {
        toast.success(`User (${res.data.name}) was created`);
        navigator('/json/users/' + res.data.id);
      })
      .catch(err => {
        toast.error(err.message);
        setFormErrorMessage(err.message);
      });
  }

  return (
    <Container>
      <UserForm onUserFormSubmit={newUserHandler} />

      {/* {formErrorMessage && <p>{formErrorMessage}</p>} */}
    </Container>
  )
}

export default CreateUserPage;