import React, { use } from "react";
import { data, Link } from "react-router";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  // 16.0 my requirement is update the user login time after login. Note: As previously we have used PUT method to update whole data. for updating one or two data we will use patch method.

  //   16.3 receive  the signInUser and directly destructure it
  const { signInUser } = use(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    // 16.4  call the signInUser
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user); /* metadata: UserMetadata 
        createdAt : "1747402278145" 
        creationTime : "Fri, 16 May 2025 13:31:18 GMT" 
        lastLoginAt : "1747410265533"
        lastSignInTime : "Fri, 16 May 2025 15:44:25 GMT" */

        // 16.6 make an object because we will find the logged in user by email and update the user lastSignInTime
        const userSignInInfo = {
          email,
          lastSignInTime: user.metadata?.lastSignInTime,
        };

        // 16.7 send the data to the backend
        fetch(
          "https://mil-10-m-56-crud-with-expresso-mongodb-server.vercel.app/users",
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userSignInInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch", data);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 mx-auto shadow-2xl">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-600">
          Sign in to access your account
        </p>
      </div>
      <form
        onSubmit={handleSignIn}
        noValidate=""
        action=""
        className="space-y-12"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
