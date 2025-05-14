import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  // 7.2 get the data
  const coffees = useLoaderData();
  console.log(coffees);

  return <div>Home</div>;
};

export default Home;
