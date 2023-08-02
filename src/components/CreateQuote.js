import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { USER_QUOTES } from "../gqloperations/mutations";

export default function CreateQuote() {
  const [quote, setQuote] = useState("");

  const [createQuotes, { loading, error, data }] = useMutation(USER_QUOTES, {
    refetchQueries: ["getAllQuotes", "userProfile"],
  });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error.message}</h3>;

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuotes({
      variables: {
        name: quote,
      },
    });
  };
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && data.quotes && (
        <div className="green card-panel">Quote created Successfully</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="write your quote here"
        />
        <button className="btn green">create</button>
      </form>
    </div>
  );
}
