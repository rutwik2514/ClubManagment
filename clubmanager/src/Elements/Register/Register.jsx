import React from "react";
import "../Register/Register.css";
function Register() {
  const [open,setOpen] = React.useState(false);
  const [data,setData] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityKey: "",
    dropValue: "User",
    showSecurityKey: false,
  })
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
            onChange={(e) =>{
              let newData= data;
              newData.email= e.target.value;
              setData(newData);
            } }
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>{
              let newData= data;
              newData.userName= e.target.value;
              setData(newData);
            } }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>{
              let newData= data;
              newData.password= e.target.value;
              setData(newData);
            } }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>{
              let newData= data;
              newData.confirmPassword= e.target.value;
              setData(newData);
            } }
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
              onChange={(e) =>{
                let newData= data;
                newData.securityKey= e.target.value;
                setData(newData);
              } }
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
