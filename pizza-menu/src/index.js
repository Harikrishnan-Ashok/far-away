import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}
function Menu() {
  const pizzaa = pizzaData;
  //  const pizzaa = [];
  const numpizza = pizzaa.length;

  return (
    <main className="menu">
      <h2>Our Menu </h2>
      {numpizza > 0 ? (
        <>
          <p>
            this is just a test website to learn the fundamentals of react js
            and aslo to practice the same... :}
          </p>
          <ul className="pizzas">
            {pizzaData.map((item) => (
              <Pizza obj={item} />
            ))}
          </ul>
        </>
      ) : (
        <p>there are no pizzas to show :/</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && <Order closeHour={closeHour}></Order>}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>
        We're open untill {props.closeHour}:00 hr ,Come visit us or order
        online.....
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.obj.soldOut ? "sold-out" : ""}`}>
      <img src={props.obj.photoName} alt={props.alt} />
      <div>
        <h3>{props.obj.name}</h3>
        <p>{props.obj.ingredients}</p>
        <span>{props.obj.soldOut ? "SOLD OUT" : props.obj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
