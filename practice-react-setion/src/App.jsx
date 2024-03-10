import { useEffect, useState } from "react";

import "./App.css";
import SingleProduct from "./components/singleProduct/singleproduct";

function App() {
  // const [count, setcount] = useState(0);
  const [users, setUser] = useState([]);
  // const handle = () => {
  //   setname("helo boss");
  //   console.log(name);
  // };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => {
        // console.log(data);
        setUser(data);
      })
    );
  }, []);

  return (
    <>
      <h1>Practice react on setion</h1>
      <hr />
      {/* <h1>count: {count}</h1>
      <button onClick={() => setcount(count - 1)}>add</button>
      <button onClick={() => setcount(count + 1)}>add</button> */}
      {/* <button onClick={handle}>name</button> */}
      {users.map((item) => (
        <SingleProduct key={item.id} product={item}></SingleProduct>
      ))}
    </>
  );
}

export default App;
