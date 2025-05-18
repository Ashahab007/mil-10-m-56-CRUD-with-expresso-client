import React from "react";
import { data, Link } from "react-router";
import Swal from "sweetalert2";

// 11.2 receive the coffees and setCoffees
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  // 8.0 my requirement is delete coffee items upon delete showing with sweet alert with double confirm.
  const { _id, photoURL, price, Quantity, name } = coffee;

  // 8.3 created handleDelete function with sweet alert
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // 8.5 creating client side fetch to send the id to server. As we are going to use the id to delete so we need dynamic id
        fetch(
          `https://mil-10-m-56-crud-with-expresso-mongodb-server.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("After delete", data);
            // 8.6 the following message will be show when deletedCount value is 1 i.e the data is an object contains key deletedCount which is found in console of data. Now reload it you will find the remaining items
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
            // 11.3 filter the coffees and set the remaining coffee
            const remainingCoffees = coffees.filter(
              (coffee) => coffee._id !== _id
            );
            setCoffees(remainingCoffees);
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="h-72" src={photoURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <p>Quantity: {Quantity}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2">
              {/* 9.0 my requirement is view specific coffee item. so set Link from react router and set the dynamic id */}
              <Link to={`/coffee/${_id}`}>
                <button className="btn join-item">View </button>
              </Link>
              {/* 10.1 Created Link for the UpdateCoffee path */}
              
              <Link to={`/updatecoffee/${_id}`}>
                <button className="btn join-item">Edit</button>
              </Link>

              <button
              {/* 8.1 getting the item by its id */}
                onClick={() => handleDelete(_id)}
                className="btn join-item"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
