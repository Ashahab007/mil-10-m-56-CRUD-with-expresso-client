import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  // 9.2 now we get the data of specific coffee. Detail show of this coffee will be design later.
  const coffee = useLoaderData();
  console.log(coffee);
  return <div></div>;
};

export default CoffeeDetails;
