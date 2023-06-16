import { useState } from 'react';
import AiForm from '../../Components/AiForm/AiForm';
import AiOutput from '../../Components/AiOutput/AiOutput';
import Container from '../../Components/Container/Container';

const AiPage = () => {
  const [personData, setPersonData] = useState(null);

  const nameFormHandler = name => {
    setPersonData(prevState => {
      return {...prevState, name};
    })

    fetch('https://api.agify.io?name=' + name)
      .then(res => res.json())
      .then(data => {
        console.log(data.age);
        setPersonData(prevState => {
          return {...prevState, age: data.age};
        })
      })

    fetch('https://api.genderize.io?name=' + name)
      .then(res => res.json())
      .then(data => {
        setPersonData(prevState => {
          return {...prevState, gender: data.gender};
        })
      })

    fetch('https://api.nationalize.io?name=' + name)
      .then(res => res.json())
      .then(data => {
        setPersonData(prevState => {
          return {...prevState, nationality: data.country[0].country_id};
        })
      })
  }

  return (
    <Container>
      <AiForm onNameSubmit={nameFormHandler} />
      <AiOutput data={personData} />
    </Container>
  )
}

export default AiPage;