import React from "react";

function Alert({ errors, clearError }) {
  if (errors) {
    console.log("Errors:", errors);
    return (
      <div style={{ border: "1px solid", width: 400 }}>
        <div style={{ padding: "4px 5px", float: "right" }}>
          <button onClick={clearError}>x</button>
        </div>
        <h1 style={{ color: "red" }}>Error</h1>
        {errors.map(({ field, defaultMessage }) => (
          <p key={field}>
            {field}: {defaultMessage}
          </p>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Alert;
