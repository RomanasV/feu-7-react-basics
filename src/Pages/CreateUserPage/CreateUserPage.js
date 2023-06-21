import { useState } from "react";
import Container from "../../Components/Container/Container";
import axios from "axios";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const CreateUserPage = () => {
  const navigator = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const [formErrorMessage, setFormErrorMessage] = useState('');
  
  const nameHandler = event => setName(event.target.value);
  const usernameHandler = event => setUsername(event.target.value);
  const emailHandler = event => setEmail(event.target.value);
  const cityHandler = event => setCity(event.target.value);

  const newUserHandler = (event) => {
    event.preventDefault();

    const newUserObj = {
      name,
      username,
      email,
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city,
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }

    axios.post(`${API_URL}/users`, newUserObj)
      .then(res => navigator('/json/users/' + res.data.id))
      .catch(err => setFormErrorMessage(err.message));
  }

  return (
    <Container>
      <form onSubmit={newUserHandler} noValidate>
        <input type="text" placeholder="Name" value={name} onChange={nameHandler} />
        <input type="text" placeholder="Username" value={username} onChange={usernameHandler} />
        <input type="email" placeholder="Email" value={email} onChange={emailHandler} />
        <input type="text" placeholder="City" value={city} onChange={cityHandler} />

        <button type="submit">Create</button>
      </form>

      {formErrorMessage && <p>{formErrorMessage}</p>}
    </Container>
  )
}

export default CreateUserPage;