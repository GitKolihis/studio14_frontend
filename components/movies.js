/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Spinner from "./spinner";
import { addCollection } from "../helpers/api/authentication";

const Movies = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const movie = {
      image: data.image.url,
      duration: data.runningTimeInMinutes,
      episodes: data.numberOfEpisodes,
      seriesStart: data.seriesStartYear,
      seriesEnd: data.seriesEndYear ? data.seriesEndYear : "Null",
      title: data.title,
      titleType: data.titleType,
      year: data.year,
    };
    try {
      const result = addCollection(movie);
      console.log("Saved: ", result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 mb-4">
        <img className="w-full" src={data.image.url} alt={data.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.title}</div>
          <span className="inline-block bg-violet-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Title Type: {data.titleType}
          </span>
          <span className="inline-block bg-indigo-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Year: {data.year}
          </span>
          <span className="inline-block bg-pink-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Duration: {data.runningTimeInMinutes} mins
          </span>
          <span className="inline-block bg-rose-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Number of Episodes: {data.numberOfEpisodes}
          </span>
          <span className="inline-block bg-emerald-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Start Year : {data.seriesStartYear}
          </span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-full w-full text-white bg-teal-600 hover:bg-teal-900 focus:outline-none  focus:ring-yellow-300 font-medium text-sm px-2 py-2.5 text-center mr-2 mb-4 dark:focus:ring-yellow-900"
          >
            {loading ? <Spinner /> : "Add to My Collection"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Movies;
