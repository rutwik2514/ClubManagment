import React from "react";
import "../Register/Register.css";
function Register() {
  const [open,setOpen] = React.useState(false);
  const data  = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityKey: "",
    dropValue: "User",
    showSecurityKey: false,
  }

  function handleChangeDropDown(e) {
    data.dropValue = e.target.value;
    if (e.target.value === "Admin") {
      console.log("came");
      setOpen(true)
    } else {
      setOpen(false);
    }
  }

  function handleClick() {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      window.alert("Password and confrim password does not match");
    }
    console.log(open);
  }
  return (
    <section id="registerSection">
      <div id="registerCard">
        <h1>Regsiter</h1>
        <div>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => (data.email = e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => (data.userName = e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => (data.password = e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => (data.confirmPassword = e.target.value)}
          />
        </div>
        <div>
          <select onChange={handleChangeDropDown}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        {open && (
          <div>
            <input
              type="text"
              placeholder="Security Key"
              onChange={(e) => (data.securityKey = e.target.value)}
            />
          </div>
        )}
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </section>
  );
}

export default Register;
