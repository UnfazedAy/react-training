/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");

  // const appId = process.env.REACT_APP_API_ID;
  // const appKey = process.env.REACT_APP_API_KEY;

  const url = `http://localhost:5000/api/recipes?q=${query}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData()
  }, [])

  return <div>Home</div>;
};

export default Home;
