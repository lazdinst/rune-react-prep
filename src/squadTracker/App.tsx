import { useState, useMemo, useCallback } from "react";
import { SQUADS } from "./data";
import type { ISquadData, SquadStatus, SquadType } from "./types";
import { ColumnStyle, RowStyle } from "./styles";
import Squad from "./Squad";

const squadTypes = ["infantry", "drone", "recon"] as SquadType[];

const NEXT_STATUS: Record<SquadStatus, SquadStatus> = {
  STANDBY: "DEPLOYED",
  DEPLOYED: "RETURNING",
  RETURNING: "STANDBY",
};

type SortDir = "none" | "asc" | "desc";

const NEXT_SORT_DIR: Record<SortDir, SortDir> = {
  none: "desc",
  desc: "asc",
  asc: "none",
};

function App() {
  const [squads, setSquads] = useState<ISquadData>(SQUADS);
  const [squadTypeFilter, setSquadTypeFilter] = useState<SquadType | "">("");
  const [sortDir, setSortDir] = useState<SortDir>("none");

  const togglesortDir = () => {
    setSortDir((prev) => NEXT_SORT_DIR[prev]);
  };

  const handleClearFilters = () => {
    setSortDir("none");
    setSquadTypeFilter("");
  };

  const handleSetSquadStatus = useCallback(
    (id: string) => {
      setSquads((prev) => {
        return prev.map((sqd) => {
          return sqd.id === id
            ? {
                ...sqd,
                status: NEXT_STATUS[sqd.status],
                lastReport: new Date().toISOString(),
              }
            : sqd;
        });
      });
    },
    [setSquads]
  );

  const filteredSquads = useMemo(() => {
    const base = squads.filter((sqd) => {
      return !squadTypeFilter || sqd.type === squadTypeFilter;
    });

    if (sortDir === "none") return base;

    // Determine Sort Direction
    return [...base].sort((a, b) => {
      return sortDir === "asc"
        ? a.priority - b.priority
        : b.priority - a.priority;
    });
  }, [squads, squadTypeFilter, sortDir]);

  return (
    <div style={ColumnStyle}>
      <h3>Squad Tracker</h3>
      <div style={RowStyle}>
        <div>
          {squadTypes.map((type) => {
            return (
              <label key={type}>
                <input
                  type="radio"
                  name="squadType"
                  value={type}
                  checked={squadTypeFilter === type}
                  onChange={() => setSquadTypeFilter(type)}
                />
                {type}
              </label>
            );
          })}
          <label>
            <input
              type="radio"
              name="squadType"
              value={""}
              checked={squadTypeFilter === ""}
              onChange={() => setSquadTypeFilter("")}
            />
            All
          </label>
        </div>
        <div>
          <button type="button" onClick={togglesortDir}>
            Sort: {sortDir}
          </button>
          <button type="button" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
      <div style={ColumnStyle}>
        {filteredSquads.map((sqd) => (
          <Squad
            key={sqd.id}
            squad={sqd}
            handleSetSquadStatus={handleSetSquadStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
