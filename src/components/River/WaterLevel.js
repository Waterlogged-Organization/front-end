import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default class WaterLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  levelClasses = {
    Low: "color-green",
    Medium: "color-orange",
    High: "color-red",
  };

  render() {
    return (
      <div className="current-water-level">
        <FontAwesomeIcon
          className={
            this.levelClasses[this.props.level] + " water-level-bullet"
          }
          icon={faCircle}
        />
        <span style={{"margin-left": "1rem"}} className={this.levelClasses[this.props.level] + " water-level"}>
          {this.props.level + " water"}
        </span>
        <span style={{"display":"block", "margin-left": "2rem", "font-size": "14px"}} className="waterl-level-value">
          {this.props.level_value + " - " + this.props.time}
        </span>
      </div>
    );
  }
}
