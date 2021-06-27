// Gabarito: import React from "react";
import React from "react";
import "./button.css";

const Button = ({ className, children, disabled, onClick }) => (
  <button
    onClick={ onClick }
    className={`button-text ${className}`}
    disabled={ disabled }
  >
    { children }
  </button>
);

export default Button;


// o que eu tinha feito antes:
// import React, { Component } from 'react';

// class Button extends Component {
//   render() {
//    // desestruturando os componentes que p botão vai ter: 
//    const { /* btnClass */ btnText, onclick, desabled  } = this.props;
//     return (
//       <button
//         // className={btnClass}
//         type="button"
//         onClick={onclick}
//         disable = {desabled}
//       >{btnText}</button>
//    ) 
//   }
// }

// export default Button;