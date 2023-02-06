import React from "react";
// import { Calendar } from "../Calendar/Index";
import "../Main/Main.css";
function Main() {
  function handleClick() {
    window.location.href = "/addClub";
  }
  function handleClick2() {
    window.location.href = "/clubs";
  }
  return (
    <section style={{ height: "100vh" }} id="mainSection">
      <h1>Welcome</h1>
      {/* <Calendar /> */}
      <button className="btn btn-success" onClick={handleClick}>
        Add Club Page
      </button>
      <button className="btn btn-success my-1" onClick={handleClick2}>
        ClubDashboard
      </button>
    </section>
  );
}

export default Main;
