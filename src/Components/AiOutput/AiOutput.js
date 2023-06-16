const AiOutput = ({ data }) => {
  const { age, gender, nationality, name } = data;
  console.log(age);
  console.log(gender);
  console.log(nationality);

  return (
    <>
      <h2>Info about {name}:</h2>
      <ul>
        <li>Age: {age}</li>
        <li>Gender: {gender}</li>
        <li>Nationality: {nationality}</li>
      </ul>
    </>
  )
}

export default AiOutput