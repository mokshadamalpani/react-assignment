import { useState } from "react";
import "./App.css";
import Assigment2 from "./components/Assignment2";
//import ProfileCart from "./components/ProfileCart";
import list from "./profile.json";

function App() {
  const [data, setData] = useState(list);

  const getData = (id) => {
    const updatedList = data.filter((item) => {
      return item.id !== id;
    });
    setData(updatedList);
  };
  return (
    // <div className="container">
    //   {data.map((item) => {
    //        return <ProfileCart {...item} changeDeleteHandler={getData} key={item.id}/>;
    //   })}
    // </div>
     <Assigment2 />
  );
}

export default App;
