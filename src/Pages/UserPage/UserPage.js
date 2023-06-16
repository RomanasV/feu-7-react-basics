import { useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

const UserPage = () => {
  // const params = useParams();
  // const id = params.id;

  const { id } = useParams();

  const [user, setUser] = useState(null);

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

  return (
    <Container>
      <h1>{user.name} info:</h1>
    </Container>
  )
}

export default UserPage;