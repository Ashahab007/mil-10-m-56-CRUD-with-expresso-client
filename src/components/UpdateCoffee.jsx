import React from "react";
import { data, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  // 10.1 getting the data and destructured it
  const coffee = useLoaderData();
  const { _id, name, Quantity, supplier, taste, price, details, photoURL } =
    coffee;

  // 10.3 create update coffee event handler
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    // 10.3 get all the data at once using FromData
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee); //now see in console the updated data

    // 10.5 send data to the db
    fetch(
      `https://mil-10-m-56-crud-with-expresso-mongodb-server.vercel.app/coffees/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          // 10.6 showing  update message in using sweet alert. here modifiedCount is found from the data object. which values varies 1 or 0.
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="p-24">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-4xl">Update Coffee</h1>
        </div>
        {/*5.2 set onSubmit*/}

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid md:grid-cols-2 gap-4">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Name"
                name="name"
                // 10.2 in every input field set a attributes of defaultValue to uncontrolled way to take the data from the form
                defaultValue={name}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Quantity"
                name="Quantity"
                // 10.2
                defaultValue={Quantity}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Supplier"
                name="supplier"
                // 10.2
                defaultValue={supplier}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Taste"
                name="taste"
                // 10.2
                defaultValue={taste}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Price"
                name="price"
                // 10.2
                defaultValue={price}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Details"
                name="details"
                // 10.2
                defaultValue={details}
              />
            </fieldset>
          </div>
          <div className="fieldset p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter photo URL"
              name="photoURL"
              // 10.2
              defaultValue={photoURL}
            />
          </div>
          <button className="btn w-full mt-4">Update Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
