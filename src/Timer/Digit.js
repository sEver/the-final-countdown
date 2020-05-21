import React from "react";

export default class Digit extends React.PureComponent {
  render = () => {
    return (
      <span className={`timer__digit-block ${this.props.className}`}>
        {this.props.value}
      </span>
    );
  };
}
