import React from "react";
import "./Card.css";
import { Data } from "../Data/Data";
function Card() {
  const [url, seturl] = React.useState();
  const [title, setTitle] = React.useState();
  const [des, setDes] = React.useState();
  const [item, setItems] = React.useState();
  const data = {
    img: "",
    title: "",
    description: "",
  };

  function handleClick() {
    //get data from backend and push into it
    data.img = url;
    data.title = title;
    data.description = des;
    Data.push(data);
    seturl("");
    setTitle("");
    setDes("");
    const CardItems = Data.map((myList) => (

      <div className="card carddiv my-2 mx-1 col-md-3" >
        <img src={myList.img} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{myList.title}</h5>
          <p className="card-text">{myList.description}</p>
        </div>
      </div>
    ));
    setItems(CardItems);
  }

  return (
    <>
    <div className="container my-5">
    <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Club Logo url"
          onChange={(e) => seturl(e.target.value)}
          value={url}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Club Name"
          onChange={(e) => setTitle(e.target.value)}
          value = {title}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Club Description"
          onChange={(e) => setDes(e.target.value)}
          value={des}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
      <div className="row">{item}</div>
    </div>
      
    </>
  );
}

export default Card;
