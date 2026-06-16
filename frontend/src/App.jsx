import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/city")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>City Information</h1>
      <h2>Total City : {data.length}</h2>

      <div className="cardBox">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <span>{item.name}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
