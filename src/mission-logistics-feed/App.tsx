import { useCallback, useState, useMemo } from "react";
import { AppWindow, AppContent, AppPanel, AppFeed } from "./styles";
import { MISSIONS, FEEDS, THEATERS, ALERTS } from "./data";
import type {
  IMissions,
  IEdgeFeeds,
  ITheaters,
  IAlerts,
  IEdgeFeed,
  FeedId,
} from "./types";
import Feed from "./Feed";
import FeedDetails from "./FeedDetails";

function App() {
  const [feeds, setFeeds] = useState<IEdgeFeeds>(FEEDS);
  const [missions, setMissions] = useState<IMissions>(MISSIONS);
  const [theaters, setTheaters] = useState<ITheaters>(THEATERS);
  const [alerts, setAlerts] = useState<IAlerts>(ALERTS);
  const [selectedFeed, setSelectedFeed] = useState<IEdgeFeed | null>(null);

  const handleSelectFeed = useCallback(
    (id: string) => {
      const feed = feeds.find((f) => f.id === id);
      if (!feed) return;
      setSelectedFeed(feed);
    },
    [feeds]
  );

  const alertsByFeed = useMemo(() => {
    const hash = new Map<FeedId, number>();
    for (let i = 0; i < alerts.length; i++) {
      const current = alerts[i];
      if (hash.has(current.feedId)) {
        const value = hash.get(current.feedId) || 0;
        hash.set(current.feedId, value + 1);
      } else {
        hash.set(current.feedId, 1);
      }
    }
    return hash;
  }, [alerts]);

  return (
    <div style={AppWindow}>
      <div
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          borderBottom: "1px solid red",
        }}
      >
        <div>
          <h3>Top Summary</h3>
        </div>
        <div>
          <button type="button" onClick={() => setSelectedFeed(null)}>
            Clear Selected Feed
          </button>
        </div>
      </div>
      <div style={AppContent}>
        <div style={AppPanel}>
          <pre>{JSON.stringify(alerts, null, 2)}</pre>
        </div>
        <div style={AppFeed}>
          {feeds.map((f) => (
            <Feed
              key={f.id}
              feed={f}
              handleSelectFeed={handleSelectFeed}
              alertCount={alertsByFeed.get(f.id) ?? 0}
            />
          ))}
        </div>
        <div style={AppPanel}>
          {/* Selected Feed Detail View */}
          {selectedFeed ? <FeedDetails feed={selectedFeed} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
