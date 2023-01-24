import React from "react";
import "../Main/Main.css";
function Main() {
    const [hide1,setHide1] = React.useState(false);
    const [hide2,setHide2] = React.useState(false);
    const [hide3,setHide3] = React.useState(false);
    setTimeout(() => {
        setHide1(true)
    }, 100);
    React.useEffect(()=>{
        if(hide1 === true){
        setTimeout(() => {
            setHide1(false);
            setHide2(true);
            console.log("came1");
        }, 2000);}

    }, [hide1]);
    React.useEffect(()=>{
        if(hide2 === true){
        setTimeout(() => {
            setHide2(false);
            setHide3(true);
            console.log("came2");
            console.log(hide1);
            console.log(hide2);
            console.log(hide3);


        }, 2000);}
    },[hide2])
    React.useEffect(()=>{
        setTimeout(() => {
           setHide1(true);  
           console.log("came3");

        }, 2000);
    },[hide3])

  return (
    <>
      <section id="mainsection" className="d-flex justify-content-center align-items-center">
        <div className="string">
          <h1>
            <span>Welcome</span><span id="hidethis">સ્વાગત છે</span><span>स्वागत</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Main;
