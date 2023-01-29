import React from "react";
import "../Main/Main.css";
function Main() {
  function handleLoginClick() {
    window.location.href = "/login";
  }
  function handleRegisterClick() {
    window.location.href = "/register";
  }

  return (
    <section style={{ height: "100vh" }} id="mainSection">
      <h1>Welcome</h1>
      <div id="btnSection">
      <button onClick={handleLoginClick} className="mainbtn">
        Login
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
      <button onClick={handleRegisterClick} className="mainbtn">
        Register
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
      </div>
    </section>
  );
}

export default Main;
