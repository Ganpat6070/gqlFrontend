import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_QUERIES } from "../gqloperations/queries";
import { Link } from "react-router-dom";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUERIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if(data.userquotes.length === 0) return <h3>No Quotes Available</h3>

  return (
    <div className="container">
      {data.userquotes.map((quotes, index) => {
        return (
          <blockquote key={index}>
            <h6>{quotes.name}</h6>
            <Link to={`/profile/${quotes.by._id}`}><p className="right-align">~{quotes.by.firstName}</p></Link>
          </blockquote>
        );
      })}
    </div>
  );
}
