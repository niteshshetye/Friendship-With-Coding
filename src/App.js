import React, { useState } from "react";

// IMPORT CSS
import "./App.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <main>
      <header>
        <h3>Create Account</h3>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            className="name"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="pass"
            id="pass"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default App;
