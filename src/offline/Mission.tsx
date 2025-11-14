import type { IMissionDataItem } from "./types";
import { RowStyle, ColumnStyle, getStatusIndicatorStyle } from "./styles";
import MissionTime from "./MissionTime";
import { useMissions } from "./providers";

interface IMissionProps {
  mission: IMissionDataItem;
}

function Mission({ mission }: IMissionProps) {
  const { advance } = useMissions();

  const handleOnClick = () => {
    advance(mission.id);
  };

  return (
    <div
      style={{
        ...ColumnStyle,
        padding: "1rem",
        borderBottom: "1px solid green",
      }}
    >
      {/** Header Row */}
      <div style={RowStyle}>
        <span style={getStatusIndicatorStyle(mission.status)}></span>
        <h3 style={{ margin: "0rem" }}>{mission.title}</h3>
      </div>
      <div style={RowStyle}>
        <button
          type="button"
          onClick={handleOnClick}
          disabled={
            mission.status === "COMPLETED" || mission.status === "FAILED"
          }
        >
          Advance Mission
        </button>
      </div>
      {/** Content Row */}
      <div style={RowStyle}>
        <div style={RowStyle}>Status: {mission.status}</div>
        <div style={RowStyle}>Type: {mission.type}</div>
        <div style={RowStyle}>Priority: {mission.priority}</div>
        <div style={RowStyle}>[{mission.location}]</div>
        <MissionTime lastUpdate={mission.lastUpdate} />
      </div>
    </div>
  );
}

export default Mission;
