import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  // 7.2 get the data
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* created a coffee card */}
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>
      ))}
    </div>
  );
};

export default Home;
