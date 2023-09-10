import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
const childStyle = {
  display: "flex",
  flexDirection: "column", // Align items vertically
  alignItems: "center", // Center items horizontally
  justifyContent: "center",
};

function App() {
  const cardStyle = {
    display: "flex",
    flexDirection: "column", // Align items vertically
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    width: "75%",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "20px",
  };

  return (
    <div style={childStyle}>
      <div style={cardStyle}>
        <Avatar></Avatar>
        <Desc></Desc>
      </div>
    </div>
  );
}
function Avatar() {
  const avatarStyle = { width: "100%", height: "100%" };
  return (
    <div>
      <img src="images/dev.png" alt=" cant load" style={avatarStyle}></img>
    </div>
  );
}
function Desc() {
  return (
    <div>
      <h1>My Name</h1>
      <p>
        Upcomming full stack web developer with a big aim and a perfect goal set
        in mind and will prolly do anything to achive the same as well
      </p>
      <div style={childStyle}>
        <Skill skill="React" col="red" />
        <Skill skill="JS" col="green" />
        <Skill skill="HTML" col="blue" />
        <Skill skill="CSS" col="yellow" />
      </div>
    </div>
  );
}
function Skill(props) {
  return (
    <div style={{ backgroundColor: props.col, width: "100%", margin: "2%" }}>
      <h2 style={childStyle}>
        <span>{props.skill}</span>
      </h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
