import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
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
              <button className="btn join-item">View </button>
              <button className="btn join-item">Edit</button>
              {/* 8.1 getting the item by its id */}
              <button
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
