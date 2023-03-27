import axios from "../utils/axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
