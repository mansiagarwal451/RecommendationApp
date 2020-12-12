import React, { useState } from "react";
import "./styles.css";

var types = {
  "fast food": [
    { name: "Pizza", rating: "7/10" },
    { name: "Burger", rating: "5/10" },
    { name: "Pasta", rating: "9/10" }
  ],
  "main course": [
    { name: "Kadai paneer and naan", rating: "9.5/10" },
    { name: "Veg biryani", rating: "9/10" },
    { name: "Rice bowl", rating: "9.5/10" }
  ],
  beverages: [
    { name: "Coca-Cola", rating: "9/10" },
    { name: "Icetea", rating: "9.5/10" },
    { name: "Kashmiri Kahwa", rating: "9.5/10" }
  ]
};

var typeswithus = Object.keys(types);
var arr = [];
export default function App() {
  const [description, setDescription] = useState("");

  function clickHandler(type) {
    console.log(type);
    var description = types[type];
    arr = types[type];
    setDescription(description);
    return <li>{type}</li>;
  }

  return (
    <div className="App">
      <h1>goodfoods</h1>
      {typeswithus.map(function (type) {
        return (
          <li
            onClick={() => clickHandler(type)}
            style={{ display: "inline", padding: "1rem" }}
            key={type}
          >
            <button>{type}</button>
          </li>
        );
      })}

      <hr />
      <br />

      {arr.map(function (item) {
        return (
          <li key={item}>
            {item.name}
            <br />
            {item.rating}
            <br />
          </li>
        );
      })}
    </div>
  );
}
