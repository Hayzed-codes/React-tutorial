import React from "react";



const Welcome = () => {
  const classWorkEvent = () => {
    console.log("I was clicked");
  };

  return (
    <div>
      <button style={{background:'brown', cursor: 'pointer'}} onClick={classWorkEvent}>Don't Click</button>
    </div>
  );
};

export default Welcome;
