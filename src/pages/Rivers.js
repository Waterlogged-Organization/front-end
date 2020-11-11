import River from "../components/River/RiverCard";
import { dataRiver } from "../data/dataRiver";
import CardColumns from "react-bootstrap/CardColumns";

function Rivers(props) {
  return (
    <div>
      <h1>Rivers</h1>
      <CardColumns>
        {dataRiver.map((r) => (
          <River
            image={r.image}
            name={r.name}
            difficulty={r.difficulty}
            level={r.level}
            level_value={r.level_value}
            time={r.time}
            paddlers_last_year={r.paddlers_last_year}
            paddlers_going_soon={r.paddlers_going_soon}
          ></River>
        ))}
      </CardColumns>
    </div>
  );
}

export default Rivers;
