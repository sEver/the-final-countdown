import React from "react";
import Digit from "./Digit";
import "./Timer.scss";

export default class Timer extends React.Component {
  state = {
    timeLeftArray: [],
  };
  constructor(props) {
    super(props);
    this.showdownMilliseconds = Date.parse(props.until);
    console.log("Showdown at: ", this.showdownMilliseconds);
  }

  getCurrentTimeMilliseconds = () => {
    return new Date().getTime();
  };

  componentDidMount = () => {
    this.interval = setInterval(this.cycleSecond, 1000);
  };

  cycleSecond = () => {
    let millisecondsLeft =
      this.showdownMilliseconds - this.getCurrentTimeMilliseconds();
    let timeLeftArray = this.getTimeLeftArray(millisecondsLeft);

    this.setState({
      millisecondsLeft,
      timeLeftArray,
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeLeftArray(millisecondsLeft) {
    const millisecondsInASecond = 1000;
    const secondsInAMinute = 60;
    const minutesInAnHour = 60;
    const hoursInADay = 24;
    const secondsInAnHour = secondsInAMinute * minutesInAnHour;
    const secondsInADay = hoursInADay * secondsInAnHour;
    const millisecondsInADay = secondsInADay * millisecondsInASecond;

    let timerDays = Math.floor(millisecondsLeft / millisecondsInADay);
    let timerTime = new Date(millisecondsLeft % millisecondsInADay);
    let result = [
      timerDays,
      timerTime.getHours(),
      timerTime.getMinutes(),
      timerTime.getSeconds(),
    ];
    result = result.map((element) => ("" + element).padStart(2, "0"));
    console.log(result);

    return result;
  }

  renderDigits() {
    if (this.state.millisecondsLeft <= 0) {
      return (
        <span className="showdown">
          To już. Gratulacje!!!
          <span role="img" aria-label="przytulenie">
            🤗
          </span>
        </span>
      );
    }
    const classes = ["dni", "godzin", "minut", "sekund"];
    return (
      <>
        {this.state.timeLeftArray.map((value, index) => (
          <>
            <Digit value={value} className={classes[index]}></Digit>
          </>
        ))}
      </>
    );
  }

  render = () => {
    return (
      <div className="timer">
        <div className="timer__title">Czas, który pozostał:</div>
        <div className="timer__digits">{this.renderDigits()}</div>
      </div>
    );
  };
}
