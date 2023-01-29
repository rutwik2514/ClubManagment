import React from "react";
import "../Login/Login.css"

function Login() {
  return (
    <section id="LoginSection">
      <div id="card">
        <h1>login</h1>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <div>
            <button>Submit</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
