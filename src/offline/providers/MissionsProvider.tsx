import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import type { IMissionData } from "../types";
import { DATA } from "../data";
import { MissionsContext } from "./MissionsContext";
import { useQueue } from "./QueueContext";
import { getNextMissionStatus } from "../utils";

interface IMissionsProviderProps {
  children: React.ReactNode;
}

export function MissionsProvider({ children }: IMissionsProviderProps) {
  const [missions, setMissions] = useState<IMissionData>(DATA);
  const { enqueue } = useQueue();

  const advance = (id: string) => {
    const mission = missions?.find((m) => m.id === id);

    if (!mission) return;

    const nextStatus = getNextMissionStatus(mission?.status);

    setMissions((prev) => {
      if (!prev) return prev;
      return prev.map((m) => {
        if (m.id === id) {
          return {
            ...m,
            status: nextStatus,
            lastUpdate: new Date().toISOString(),
          };
        }
        return m;
      });
    });

    enqueue({
      id: uuidv4(),
      kind: "UPDATE_STATUS",
      missionId: id,
      payload: { status: nextStatus },
      createdAt: new Date().toISOString(),
      attempts: 0,
      state: "PENDING",
    });
  };

  return (
    <MissionsContext.Provider value={{ missions, advance, setMissions }}>
      {children}
    </MissionsContext.Provider>
  );
}
