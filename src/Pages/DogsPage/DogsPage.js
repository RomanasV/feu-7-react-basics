import { useState } from "react";
import Container from "../../Components/Container/Container";
import DogImages from "../../Components/DogImages/DogImages";
import DogsForm from "../../Components/DogsForm/DogsForm";

const DogsPage = () => {
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleSelect = breed => setSelectedBreed(breed);
  
  return (
    <Container>
      <DogsForm onBreedSelect={handleSelect} selectedBreed={selectedBreed} />
      <DogImages breed={selectedBreed} />
    </Container>
  )
}

export default DogsPage;