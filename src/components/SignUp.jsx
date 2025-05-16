import React, { use } from "react";
import { data, Link } from "react-router";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  // 12.7
  const { createUser } = use(AuthContext);
  console.log(createUser);
  // 12.8
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // 13.0 my requirement is email, password is sent to the firebase db and other user info is sent to mongodb server because later i will show the user information in the ui.
    // const email = formData.get("email");
    // const password = formData.get("password");
    const userDataWithEmailPass = Object.fromEntries(formData.entries());
    console.log(userDataWithEmailPass); //{name: 'Ammar Shahab', email: 'asfasdf@www', address: 'Shewrapara', photoURL: 'https://i.ibb.co.com/HLFxy5Yv/woman-user-circle-icon.png', password: '123456'}

    // 13.1 now we are going to destructure it email, password, ...restFormData. here ...restFormData means rest of the data will be save in restFormData.

    const { email, password, ...restFormData } = userDataWithEmailPass;

    console.log(email, password);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // 13.2 but we also want to send the email, login time, account creation time to the mongodb with restFormData that's why created object. Note: login time, account creation time is found in user.metaData during createUser.
        const accountCreationTime = user.metadata.creationTime;
        const accountSignInTime = user.metadata.lastSignInTime;

        const userProfile = {
          email,
          ...restFormData,
          accountCreationTime,
          accountSignInTime,
        };

        //save data to the db
        // 13.5 save data to the db
        fetch(
          "https://mil-10-m-56-crud-with-expresso-mongodb-server.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("after profile save", data);
            if (data.insertedId) {
              // 13.6 now requirement is adding sweet alert during added user to db.
              Swal.fire({
                title: "User Added Successfully",
                icon: "success",
                draggable: true,
              });
            }
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 mx-auto shadow-2xl">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm dark:text-gray-600">
          Sign in to access your account
        </p>
      </div>
      {/* 12.9 */}
      <form onSubmit={handleSignUp} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              //   12.10.1
              name="name"
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              //   12.10.1
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Address
            </label>
            <input
              type="text"
              //   12.10.1
              name="address"
              placeholder="12/1 example street"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Photo
            </label>
            <input
              type="text"
              //   12.10.1
              name="photoURL"
              placeholder="URL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              //   12.10.1
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-600"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white"
            >
              Sign Up
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have account?
            <Link to="/signin">Sign In</Link>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
