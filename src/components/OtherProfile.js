import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_INDIVIDUAL_PROFILES } from "../gqloperations/queries";

export default function OtherProfile() {
  const { userId } = useParams();
  console.log(userId);

  const { loading, error, data } = useQuery(GET_INDIVIDUAL_PROFILES, {
    variables: {
      userId
    },
  });
//   console.log(data);
  //   const navigate = useNavigate();

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error-{error.message}</h3>;

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
