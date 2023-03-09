import React from "react";
function EventHand() {
  function click() {
    console.log("button is clicked");
  }

  return <button onClick={click}>click</button>;
}
export default EventHand;
