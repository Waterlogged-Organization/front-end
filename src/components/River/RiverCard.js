import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import WaterLevel from "./WaterLevel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import iconKayak from "../../img/icon-kayak.svg";
import "./RiverCard.scss";

export default class River extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="card-river" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>
            {this.props.name + " - Class " + this.props.difficulty}
          </Card.Title>
          <Card.Text>
            <WaterLevel
              level={this.props.level}
              level_value={this.props.level_value}
              time={this.props.time}
            />

            {this.props.paddlers_last_year != 0 && (
              <div className="user-last-year">
                <img src={iconKayak} alt=""></img>
                <span>
                  {this.props.paddlers_last_year + " persons this year"}
                </span>
              </div>
            )}

            {this.props.paddlers_going_soon != 0 && (
              <div className="user-going-soon">
                <FontAwesomeIcon className="color-blue" icon={faUser} />
                <span>
                  {this.props.paddlers_going_soon + " users going soon"}
                </span>
              </div>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button block className="btn-yellow" type="button">
            More
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
