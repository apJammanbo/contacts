import "./app.css";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import { useState } from "react";

const contacts = [
  { name: "kibum", img: "http://placeimg.com/100/100/any" },
  { name: "kibum2", img: "http://placeimg.com/100/100/any" },
  { name: "kibum3", img: "http://placeimg.com/100/100/any" },
  { name: "kibum4", img: "http://placeimg.com/100/100/any" },
  { name: "kibum5", img: "http://placeimg.com/100/100/any" },
];

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  return (
    <div id="__next">
      <div className="container">
        <Header />
        <div className="contact-wrap">
          <Left contacts={contacts} setSelectedContact={setSelectedContact} />
          <Right selectedContact={selectedContact} setSelectedContact={setSelectedContact} />
        </div>
      </div>
    </div>
  );
};

export default App;
