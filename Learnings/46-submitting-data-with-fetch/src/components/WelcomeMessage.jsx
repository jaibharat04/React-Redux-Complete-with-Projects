import React from "react";

const WelcomeMessage = () => {
  return (
    <center className="welcome-message">
      <h1>There is no post to show</h1>
      <button
        type="button"
        className="btn btn-primary"
      >
        Get Posts from the server
      </button>
    </center>
  );
};

export default WelcomeMessage;
