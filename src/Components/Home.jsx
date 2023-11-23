import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <>
      <div style={{ backgroundColor:"red"}}>
        <h1>
          <Link to="/login"> Login </Link>
        </h1>
        <br/>
        <h1>
          {/* <Link to="/signup"> Sign Up </Link> */}
        </h1>
        <br/>
        <br/>
        <br/>
        <h2>
          {PaymentResponse.name ? `Welcome - ${props.name}` : "Login Please"}
        </h2>
      </div>
    </>
  );
};
export default Home;
