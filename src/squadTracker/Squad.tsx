import { useEffect, useState } from "react";
import type { ISquad } from "./types";
import { ColumnStyle } from "./styles";

import { getTimeSinceLastReport } from "./utils";

interface ISquadProps {
  squad: ISquad;
  handleSetSquadStatus: (id: string) => void;
}

function Squad({ squad, handleSetSquadStatus }: ISquadProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(getTimeSinceLastReport(squad.lastReport));
    const id = setInterval(() => {
      setTime(getTimeSinceLastReport(squad.lastReport));
    }, 1000);
    return () => clearInterval(id);
  }, [squad]);

  return (
    <div
      style={{ ...ColumnStyle, backgroundColor: "#333", margin: "0rem 1rem" }}
    >
      <div>
        <button type="button" onClick={() => handleSetSquadStatus(squad.id)}>
          {`Toggle ${squad.id} Status`}
        </button>
      </div>
      <div>
        <div>ID: {squad.id}</div>
        <div>Name: {squad.name}</div>
        <div>Location: {squad.location}</div>
        <div>Priority: {squad.priority}</div>
        <div>Status: {squad.status}</div>
        <div>Type: {squad.type}</div>
        <div>Last Report: {time}</div>
      </div>
    </div>
  );
}

export default Squad;
