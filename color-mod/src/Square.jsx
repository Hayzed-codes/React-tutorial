import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff", // This condition changes the color of the value on the ui from the default to the else value
      }}
    >

      <p> {colorValue ? colorValue : "Empty Value"} </p> 
      <p> {hexValue ? hexValue : null} </p>
    </section>
  );
};

Square.defaultProps = {
    colorValue: "Empty Color Value",
}

export default Square;
