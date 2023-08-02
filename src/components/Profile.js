import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROFILE } from "../gqloperations/queries";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { loading, error, data } = useQuery(GET_PROFILE);
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/login");
    return <h2>&#128544; You are not Authorized</h2>;
  }
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error-{error.message}</h3>;

  //   useEffect(() => {
  //     if (loading) {
  //       <h3>Loading...</h3>;
  //     }
  //   }, [data]);

  return (
    <div className="container my-container">
      {/* {data && data.user && } */}
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src={`https://robohash.org/${data.user.firstName}.png?size=200x200`}
          alt="pic"
        />
        <h5>{data.user.firstName + " " + data.user.lastName}</h5>
        <h6>{data.user.email}</h6>
      </div>

      <h3 className="center-align">Your quotes</h3>
      {data.user.myquotes.map((quote, index) => {
        return (
          <blockquote key={index} className="center-align">
            <h6>{quote.name}</h6>
          </blockquote>
        );
      })}
    </div>
  );
}
