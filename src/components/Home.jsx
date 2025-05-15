import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  // 7.2 get the data
  const initialCoffees = useLoaderData();
  console.log(initialCoffees);

  // 11.0 as previously we did not update the deleted item from ui upon delete. It's done by reloading. Now we are going to solve this problem. That's why took useState and set all the value initialCoffees as default. Because we need all the data where it's fetched.
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* created a coffee card */}
      {coffees.map((coffee) => (
        // 11.1 pass both as params and receive where handleDelete is created
        <CoffeeCard
          key={coffee.id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>
      ))}
    </div>
  );
};

export default Home;
