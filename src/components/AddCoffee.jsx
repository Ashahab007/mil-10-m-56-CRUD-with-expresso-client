import React from "react";

const AddCoffee = () => {
  // 5.0 my requirement is create a coffee data and send to the server by post method
  //   5.3 create a event handler
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // 5.4 as we have multiple form data we can get the data by single e.target.name.value but we use a shorter method using FormData constructor from javascript.
    const formData = new FormData(form); //converts all the data to array
    const newCoffee = Object.fromEntries(formData.entries()); //loop over an array then convert to object
    console.log(newCoffee);

    // 5.6 Send coffee data to the db, the url will be backend url localhost:3000 and all the coffee data will be saved in file we create in 5.5 '/coffees'
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding coffee to db", data);
      }); // as we have not connected fully with backend but in this step fill the form and see the data in server terminal
  };

  //   5.1 created a form
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-4xl">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      {/*5.2 set onSubmit*/}

      <form onSubmit={handleAddCoffee}>
        <div className="grid md:grid-cols-2 gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Name"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Quantity"
              name="Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Supplier"
              name="supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Taste"
              name="taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Category"
              name="category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Details"
              name="details"
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
          />
        </div>
        <button className="btn w-full mt-4">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;
