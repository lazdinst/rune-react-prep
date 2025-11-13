import { useEffect, useState, useMemo } from "react";
import { useNetwork } from "./context";
import { data } from "./data";
import type { IQueuedActions, IQueuedActionStatus } from "./types";
import { getStatusColor } from "./utils";

function App() {
  const [queue, setQueue] = useState<IQueuedActions>([]);
  const { isOnline, toggleOnline } = useNetwork();

  useEffect(() => {
    setQueue(data);
  }, [setQueue]);

  const { pending, syncing, success, error, cancelled, stale } = useMemo(() => {
    const map = new Map<IQueuedActionStatus, number>();

    queue.forEach((action) => {
      if (map.has(action.status)) {
        const count = map.get(action.status) ?? 0;
        map.set(action.status, count + 1);
      } else {
        map.set(action.status, 1);
      }
    });

    return {
      pending: map.get("pending") ?? 0,
      syncing: map.get("syncing") ?? 0,
      success: map.get("success") ?? 0,
      error: map.get("error") ?? 0,
      cancelled: map.get("cancelled") ?? 0,
      stale: map.get("stale") ?? 0,
    };
  }, [queue]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        color: "#ccc",
        flexDirection: "column",
      }}
    >
      <div>
        <h4>{isOnline ? "Online" : "Offline"}</h4>
        <button type="button" onClick={toggleOnline}>
          {isOnline ? "Go OFFLINE" : "Go ONLINE"}
        </button>
      </div>
      <h3>Summary</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>Pending: {pending}</div>
        <div>Syncing: {syncing}</div>
        <div>Success: {success}</div>
        <div>Error: {error}</div>
        <div>Cancelled: {cancelled}</div>
        <div>Stale: {stale}</div>
      </div>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        {queue.map((action) => {
          const { id, type, status } = action;
          return (
            <li>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: getStatusColor(status),
                  }}
                ></div>
                <h3>{type}</h3>
              </div>
              <div></div>
              <div>ID: {id}</div>
            </li>
          );
        })}
      </ul>
      <div>
        <pre>{JSON.stringify(queue, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
