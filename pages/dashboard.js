import React, { useState } from "react";
import Spinner from "../components/spinner";
import { search } from "../helpers/api/authentication";
import Movies from "../components/movies";

export default function Dashboard() {
  const [state, setState] = useState({
    q: "",
  });
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

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
      const result = await search(state);
      console.log("Search Result:: ", result.data?.data?.result);
      setMovies(result.data?.data?.result);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex">
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Movie Search</h1>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-row">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="q"
                  placeholder="Seach for movie title"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className=" ml-3 rounded-full w-full text-white bg-yellow-400 hover:bg-yellow-600 focus:outline-none  focus:ring-yellow-300 font-medium text-sm px-2 py-2.5 text-center mr-2 mb-4 dark:focus:ring-yellow-900"
                >
                  {loading ? <Spinner /> : "Search Movie"}
                </button>
              </div>
            </form>

            {movies &&
              movies.map((data, index) => <Movies key={index} data={data} />)}
          </div>
        </div>
      </div>
    </>
  );
}
