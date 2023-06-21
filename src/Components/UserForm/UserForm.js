import { useEffect, useState } from "react";

const UserForm = ({ onUserFormSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const nameHandler = event => setName(event.target.value);
  const usernameHandler = event => setUsername(event.target.value);
  const emailHandler = event => setEmail(event.target.value);
  const cityHandler = event => setCity(event.target.value);

  useEffect(() => {
    setName(initialData.name);
    setUsername(initialData.username);
    setEmail(initialData.email);
    setCity(initialData.address.city);
  }, [initialData]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const address = {...initialData.address, city};

    const userObj = {
      ...initialData,
      name,
      username,
      email,
      address,
    }

    onUserFormSubmit(userObj);
  }

  return (
    <form onSubmit={formSubmitHandler} noValidate>
      <input type="text" placeholder="Name" value={name} onChange={nameHandler} />
      <input type="text" placeholder="Username" value={username} onChange={usernameHandler} />
      <input type="email" placeholder="Email" value={email} onChange={emailHandler} />
      <input type="text" placeholder="City" value={city} onChange={cityHandler} />

      <button type="submit">{initialData ? 'Edit' : 'Create'}</button>
    </form>
  )
}

export default UserForm;