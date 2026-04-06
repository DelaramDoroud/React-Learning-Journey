import { useState, useEffect, React } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt=""></img>
      <p style={{ backgroundColor: "Highlight", width: "fit-content" }}>
        Refresh Site
      </p>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
