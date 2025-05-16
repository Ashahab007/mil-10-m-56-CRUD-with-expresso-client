import React from "react";
import { Link } from "react-router";

const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
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
