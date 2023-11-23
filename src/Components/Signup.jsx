// SignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

const SignupPage = () => {
  return (
    <div>
      {/* <h2>Register</h2> */}
      <Registration />
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default SignupPage;
