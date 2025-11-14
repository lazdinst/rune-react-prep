import { useState, useEffect, useMemo } from "react";
import Mission from "./Mission";
import { useMissions } from "./providers";
import type { MissionType } from "./types";

const missionTypeOptions: MissionType[] = ["mission", "resupply", "intel"];

function Missions() {
  const { missions } = useMissions();
  const [missionFilter, setMissionFilter] = useState<string>("");
  const [debouncedFilter, setDebouncedFilter] = useState<string>("");
  const [missionTypes, setMissionTypes] = useState<MissionType | "">("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMissionFilter(value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMissionTypes(e.target.value as MissionType | "");
  };

  useEffect(() => {
    const id = setTimeout(() => setDebouncedFilter(missionFilter), 300);
    return () => clearTimeout(id);
  }, [missionFilter]);

  const titleFilter = useMemo(() => {
    return debouncedFilter.trim().toLowerCase();
  }, [debouncedFilter]);

  const filteredMissions = useMemo(() => {
    return missions.filter((m) => {
      // Do the missions title Filter
      const titleMatches =
        !titleFilter || m.title.toLowerCase().includes(titleFilter);

      // Do the mission type filter
      const missionTypeMatches =
        !missionTypes || m.type.toLowerCase() === missionTypes.toLowerCase();

      // combine the filters
      return titleMatches && missionTypeMatches;
    });
  }, [titleFilter, missionTypes, missions]);

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <div>{missionFilter}</div>
        <input
          onChange={handleInputChange}
          value={missionFilter}
          placeholder="Filter by title..."
        />
        <select onChange={handleSelectChange} value={missionTypes}>
          <option value="">All Types</option>
          {missionTypeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        {filteredMissions?.map((m) => (
          <Mission key={m.id} mission={m} />
        ))}
        {filteredMissions.length === 0 && <div>No Missions</div>}
      </div>
    </>
  );
}

export default Missions;
