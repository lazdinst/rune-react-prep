import { useEffect, useState } from "react";
import { getTimeSinceLastUpdate } from "./utils";
import { RowStyle } from "./styles";
import type { MissionLastUpdateType } from "./types";

interface IMissionTimeProps {
  lastUpdate: MissionLastUpdateType;
}

function MissionTime({ lastUpdate }: IMissionTimeProps) {
  const [timeSinceUpdate, setTimeSinceUpdate] = useState<string | null>(null);

  useEffect(() => {
    const time = getTimeSinceLastUpdate(lastUpdate);
    setTimeSinceUpdate(time);

    const intervalId = setInterval(() => {
      const time = getTimeSinceLastUpdate(lastUpdate);
      setTimeSinceUpdate(time);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [lastUpdate]);

  return <div style={RowStyle}>{timeSinceUpdate}</div>;
}

export default MissionTime;
