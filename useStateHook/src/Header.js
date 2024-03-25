import React from 'react'

const Header = ({title}) => {

  //********** */ Saving inline style in variable
  // const headerstyle = {
  //   background: "royalblue",
  //   color: "tomato",
  //   fontSize: "40px"
// }
  return (
    
    <header>
      <h1>{title}</h1>
    </header>
    
    //*************/ Using variable in inline styling
    // <header style={headerstyle}>
    //   <h1>Cohort 4.0 Student's Details.</h1>
    // </header>

    //****************/ Direct inline styling
    // <header style={{background: "blue", color: "red", fontSize: "24px", fontWeight: '800'}}>
    //   <h1>Cohort 4.0 Student's Details.</h1>
    // </header>
  )
}

export default Header
