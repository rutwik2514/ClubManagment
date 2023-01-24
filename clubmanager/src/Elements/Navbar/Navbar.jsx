import React from "react";
import "../Navbar/Navbar.css";
import Icon from "../../Assets/icon.svg";
import { useWindowSize } from "usehooks-ts";
import Clublogo from "../../Assets/ClubManager.svg"
function Navbar() {
  const [burger, setburger] = React.useState(false);
  const [open, setopen] = React.useState(false);
  const { width } = useWindowSize();
  console.log(width);
  React.useEffect(() => {
    if (width <= 950) {
      setburger(true);
    }
    if (width > 950) {
      setburger(false);
    }
  }, [width]);

  function handleClick() {
    setopen(!open);
    console.log(open);
  }

  return (
    <>
      <nav id="navbardiv" className="fixed-top">
        <div id="logodiv">
          {burger && <img src={Clublogo} alt="" id="glogo" />}
          {!burger && <img src={Clublogo} alt="" id="gdsc" />}
        </div>
        {burger && (
          <div className="burgerdiv">
            <img src={Icon} alt="" onClick={handleClick} id="iconimg" />
            {open && (
              <div id="burgeropen">
                <ul id="burgerinsidediv">
                  <li className="insideli">Home</li>
                  <li className="insideli">Register</li>
                  <li className="insideli">Timeline</li>
                  <li className="insideli">Guidelines</li>
                  <li className="insideli">Rewards</li>
                  <li className="insideli">Contact Us</li>
                </ul>
              </div>
            )}
          </div>
        )}
        {!burger && (
          <ul id="rightdiv">
            <li id="btn-1">Home</li>
            <li id="btn-2">Register</li>
            <li id="btn-3">Timeline</li>
            <li id="btn-4">Guidelines</li>
            <li id="btn-5">Contact Us</li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
