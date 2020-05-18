import React from "react";
import "./Background.scss";
export default class Background extends React.Component {
  renderArtifacts = () => {
    let n = 10;
    let result = [];
    while (n--) {
      result.push(<div className="artifact"></div>);
    }
    result.push(<div className="sun"></div>);

    return result;
  };
  render = () => {
    return <div className="background">{this.renderArtifacts()}</div>;
  };
}
