import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Club.css"
import { Data } from '../Data/Data'
function Club() {
    //get data from backend
    const ClubList = Data.map((myList) => (

        <div className="card carddiv my-2 mx-1 col-md-3" >
          <img src={myList.img} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{myList.title}</h5>
            <p className="card-text">{myList.description}</p>
          </div>
        </div>
      ));
  return (
    <>
        <Navbar />
        <div className='container-sm my-2' id='clubSection'>
            <h1>Club Lists</h1>
            {ClubList}
        </div>
    </>
  )
}

export default Club