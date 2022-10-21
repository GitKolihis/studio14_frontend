/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import { register } from "../helpers/api/authentication";
import Router from "next/router";

export default function Home() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await register(state);
      if (result.status === 201) {
        localStorage.setItem('token', result?git.data?.token);
        setLoading(false);
        Router.push("/login");
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e?.response?.data?.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="firstname"
                placeholder="First Name"
                required
                onChange={handleChange}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lastname"
                placeholder="Last Name"
                required
                onChange={handleChange}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />

              <div className="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="female"
                  name="gender"
                  required
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="gender"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Female
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  // checked
                  required
                  id="default-radio-2"
                  type="radio"
                  value="male"
                  name="gender"
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Male
                </label>
              </div>

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
                pattern="[a-z0-9]{1,15}"
                // title="Password should be digits (0 to 9) or alphabets (a to z)."
              />

              {errorMsg && (
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {errorMsg}
                </label>
              )}

              <button
                type="submit"
                className=" w-full mt-4 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                {loading ? <Spinner /> : "Create Account"}
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link href={"/login"}>
              <a className="text-pink-900 ml-2">Login</a>
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
