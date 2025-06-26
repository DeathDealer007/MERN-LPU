import React from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
  console.log("Ankit");
  return (
    <div>
      <h1>Hello from React App!</h1>
    </div>
  );
};

reactRoot.render(<App />);
