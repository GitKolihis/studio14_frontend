/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Router from "next/router";
import Spinner from "../components/spinner";
import { login } from "../helpers/api/authentication";

export default function Login() {
  const [state, setState] = useState({
    username: "",
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
    try {
      setLoading(true);
      const result = await login(state);
      if (result.status === 200 || result.status === 201) {
        Router.push("/dashboard");
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
            <h1 className="mb-8 text-3xl text-center">Login</h1>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Email"
                onChange={handleChange}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handleChange}
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
                {loading ? <Spinner /> : "Login"}
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Didn't have an account?
            <Link href={"/"}>
              <a className="text-pink-900 ml-2">Sign Up</a>
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
