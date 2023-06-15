import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const DogsForm = ({ onBreedSelect, selectedBreed }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        const breedsData = data.message;
        const breedsArr = [];

        for (let mainBreed in breedsData) {
          const subBreeds = breedsData[mainBreed];
          const breedObj = { mainBreed, subBreeds };

          breedsArr.push(breedObj);
        }

        setBreeds(breedsArr);
      })
  }, []);
  
  const breedsOptionElements = breeds.map(data => {
    const mainBreed = data.mainBreed;
    const subBreeds = data.subBreeds;

    if (subBreeds.length > 0) {
      const subBreedsOptionElements = subBreeds.map(subBreed => <option key={uuid()} value={`${mainBreed}/${subBreed}`}>{mainBreed} ({subBreed})</option>);

      return subBreedsOptionElements;
    }

    return <option key={uuid()} value={mainBreed}>{mainBreed}</option>
  })

  return (
    <form>
      <select value={selectedBreed} onChange={(e) => onBreedSelect(e.target.value)}>
        <option value='' disabled>Select a breed</option>
        {breedsOptionElements}
      </select>
    </form>
  )
}

export default DogsForm;