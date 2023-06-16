const AiOutput = ({ data }) => {
  if (!data) {
    return '';
  }

  const { age, gender, nationality, name } = data;

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