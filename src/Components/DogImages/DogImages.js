import { useEffect, useState } from "react";

const DogImages = ({ breed }) => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    if (!breed) {
      return;
    }
    
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data => {
        setImgUrl(data.message);
      })
  }, [breed]);

  return (
    <div>
      {imgUrl && <img src={imgUrl} alt="dog" />}
    </div>
  )
}

export default DogImages;