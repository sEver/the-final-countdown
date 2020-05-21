import React from "react";
import "./ChangeEffect.scss";
export default class ChangeEffect extends React.Component {
  render = () => {
    let customStyle = `
      .kwiatuszek-${this.props.value} {
        animation: bloom-${this.props.value % 2} linear 10s;
      }

    `;
    return (
      <>
        <span
          role="img"
          aria-label="kwiatuszek"
          className={`kwiatuszek kwiatuszek-${this.props.value}`}
        >
          🌸
        </span>
        <style>{customStyle}</style>
      </>
    );
  };
}
