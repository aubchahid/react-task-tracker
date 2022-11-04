import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
//! Import PropTypes before use it
import PropTypes from "prop-types";

const Header = (props) => {
  const location = useLocation()
  return (
    <div className="header">
      <h1>{props.title}</h1>
     {location.pathname === '/' &&  <Button
        color={props.showAdd ? "red" : "green"}
        text={props.showAdd ? "Close" : "Add"}
        onClick={props.onAdd}
      />}
    </div>
  );
};

//* IF THE Props.title is empty REACT JS will render this value as a default value
Header.defaultProps = {
  title: "Task Tracker",
};

//* Assign A Type to A Value :'String' or 'Number' or 'Boolean'...
// ! IMPORTANT : It still gonna render but it will return an error in the console
Header.prototype = {
  title: PropTypes.string.isRequired,
};

/* 
* You can use CSS in JS
style = {headingStyle}
const headingStyle = {
    color: 'red', backgroundColor: 'black',
} */

export default Header;
