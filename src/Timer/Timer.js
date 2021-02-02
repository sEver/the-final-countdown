import React from "react";
import Digit from "./Digit";
import "./Timer.scss";

export default class Timer extends React.Component {
  state = {
    elapsed: false,
    timerArray: [],
  };
  constructor(props) {
    super(props);
    this.showdownMilliseconds = Date.parse(props.until);
    this.millisecondsSinceTheEvent = Date.parse(props.since);
    if(this.showdownMilliseconds) {
      console.log("Showdown at: ", this.showdownMilliseconds);
    } else if(this.millisecondsSinceTheEvent) {
      this.state.elapsed = true;
      console.log("Event at: ", this.millisecondsSinceTheEvent);
    }
  }

  getCurrentTimeMilliseconds = () => {
    return new Date().getTime();
  };

  componentDidMount = () => {
    this.interval = setInterval(this.cycleSecond, 1000);
  };

  cycleSecond = () => {
    let millisecondsToDisplay;
    if(this.state.elapsed) {
      millisecondsToDisplay = 
      this.getCurrentTimeMilliseconds() - this.millisecondsSinceTheEvent;
    } else {
      millisecondsToDisplay =
        this.showdownMilliseconds - this.getCurrentTimeMilliseconds();
    }
    let timerArray = this.getTimerArray(millisecondsToDisplay);

    this.setState({
      millisecondsToDisplay,
      timerArray,
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimerArray(millisecondsToDisplay) {
    const millisecondsInASecond = 1000;
    const secondsInAMinute = 60;
    const minutesInAnHour = 60;
    const hoursInADay = 24;
    const secondsInAnHour = secondsInAMinute * minutesInAnHour;
    const secondsInADay = hoursInADay * secondsInAnHour;
    const millisecondsInADay = secondsInADay * millisecondsInASecond;

    let timerDays = Math.floor(millisecondsToDisplay / millisecondsInADay);
    let timerTime = new Date(millisecondsToDisplay % millisecondsInADay);
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
    if (this.state.millisecondsToDisplay <= 0) {
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
        {this.state.timerArray.map((value, index) => (
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
        <div className="timer__title">Czas, który {this.state.elapsed ? 'upłynął' : 'pozostał'}:</div>
        <div className="timer__digits">{this.renderDigits()}</div>
      </div>
    );
  };
}
