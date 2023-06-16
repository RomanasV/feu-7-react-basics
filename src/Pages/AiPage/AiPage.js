import { useState } from 'react';
import AiForm from '../../Components/AiForm/AiForm';
import AiOutput from '../../Components/AiOutput/AiOutput';
import Container from '../../Components/Container/Container';
import axios from 'axios';

const AiPage = () => {
  const [personData, setPersonData] = useState(null);

  // const nameFormHandler = async name => {
  //   const ageRes = await fetch('https://api.agify.io?name=' + name);
  //   const ageData = await ageRes.json();
  //   const age = ageData.age;

  //   const genderRes = await fetch('https://api.genderize.io?name=' + name);
  //   const genderData = await genderRes.json();
  //   const gender = genderData.gender;

  //   const nationalityRes = await fetch('https://api.nationalize.io?name=' + name);
  //   const nationalityData = await nationalityRes.json();
  //   const nationality = nationalityData.country[0].country_id;

  //   setPersonData({ name, age, gender, nationality });
  // }

  const nameFormHandler = async name => {
    const ageRes = await axios.get('https://api.agify.io?name=' + name);
    const genderRes = await axios.get('https://api.genderize.io?name=' + name);
    const nationalityRes = await axios.get('https://api.nationalize.io?name=' + name);
    
    const age = ageRes.data.age;
    const gender = genderRes.data.gender;
    const nationality = nationalityRes.data.country[0].country_id;

    setPersonData({ name, age, gender, nationality });
  }

  return (
    <Container>
      <AiForm onNameSubmit={nameFormHandler} />
      <AiOutput data={personData} />
    </Container>
  )
}

export default AiPage;