import React, { Component } from "react";
import Typical from "react-typical";

export class Typicals extends Component {
  render() {
    return (
      <div className="typical-style">
        <Typical
          steps={[
            "Building Scalable",
            "Apps",
            "1000",
            "For Both  ",
            "1000",
            "and Mobile",
            "1000",
            "I am expert in HTML/CSS/JavaScript ",
            "1000",
            "Boostrap ",
            "1000",
            "React",
            "1000",

            "PHP/Laravel ",
            "1000",
            "Nodejs/Express ",
            "1000",
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </div>
    );
  }
}

export default Typicals;
