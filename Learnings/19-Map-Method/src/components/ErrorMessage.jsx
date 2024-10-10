import React from "react";

function ErrorMessage({ foodkiItems }) {
  return <>{foodkiItems.length === 0 && <h3>I am Feeling Hungry.</h3>}</>;
}

export default ErrorMessage;
