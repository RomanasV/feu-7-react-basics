import { useState } from "react";
import Container from "../../Components/Container/Container";

import './CitiesPage.css';
import CitiesForm from "../../Components/CitiesForm/CitiesForm";
import CitiesList from "../../Components/CitiesList/CitiesList";

const CitiesPage = () => {
  let citiesData = [
    {
        name: 'Vilnius',
        population: 500000,
        location: {
            continent: 'Europe',
            country: 'Lietuva',
        },
        touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
        isCapital: true,
    },
    {
        name: 'New York',
        population: 8500000,
        location: {
            continent: 'North America',
            country: 'United States',
        },
        touristAttractions: [],
        isCapital: false,
    },
    {
        name: 'Tokyo',
        population: 14000000,
        location: {
            continent: 'Asia',
            country: 'Japan',
        },
        touristAttractions: ['Sensō-ji'],
        isCapital: true,
    },
    {
        name: 'Amsterdam',
        population: 1400000,
        location: {
            continent: 'Europe',
            country: 'Netherlands',
        },
        touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
        isCapital: true,
    },
    {
        name: 'Monaco',
        population: 40000,
        location: {
            continent: 'Europe',
            country: 'Monaco',
        },
        touristAttractions: [],
        isCapital: true,
    },
    {
        name: 'Havana',
        population: 2400000,
        location: {
            continent: 'North America',
            country: 'Cuba',
        },
        touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
        isCapital: true,
    },
    {
        name: 'Singapore',
        population: 5600000,
        location: {
            continent: 'Asia',
            country: 'Singapore',
        },
        touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
        isCapital: true,
    },
    {
        name: 'Melbourne',
        population: 5000000,
        location: {
            continent: 'Australia',
            country: 'Australia',
        },
        touristAttractions: ['Melbourne Skydeck'],
        isCapital: false,
    },
    {
        name: 'Sapporo',
        population: 1900000,
        location: {
            continent: 'Asia',
            country: 'Japan',
        },
        touristAttractions: ['Hokkaido Jingu'],
        isCapital: false,
    },
    {
        name: 'Miami',
        population: 400000,
        location: {
            continent: 'North America',
            country: 'United States',
        },
        touristAttractions: ['Miami Zoo', 'Ocean drive', 'Little Havana', 'Vizcaya Museum & Gardens'],
        isCapital: false,
    },
  ];

  const [cities, setCities] = useState(citiesData);
  const [editCityIndex, setEditCityIndex] = useState(null);
  const [editCity, setEditCity] = useState(null);

  const citiesUpdateHandler = (city) => {
    if (editCity) {
        setCities(prevState => prevState.toSpliced(editCityIndex, 1, city));
        setEditCity(null);
        setEditCityIndex(null);
    } else {
        setCities(prevState => [city, ...prevState])
    }
  };

  const editCityHandler = (cityIndex) => {
    setEditCity(cities[cityIndex]);
    setEditCityIndex(cityIndex);
  }

  const removeCityHandler = (cityIndex) => setCities(prevState => prevState.toSpliced(cityIndex, 1));

  return (
    <Container>
      <CitiesForm editCityData={editCity} onNewCity={citiesUpdateHandler} />
      
      <CitiesList onEditCity={editCityHandler} onRemoveCity={removeCityHandler} citiesData={cities} />
    </Container>
  )
}

export default CitiesPage;