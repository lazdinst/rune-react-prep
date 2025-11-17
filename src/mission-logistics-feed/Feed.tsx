import type { IEdgeFeed } from "./types";

interface IFeedProps {
  feed: IEdgeFeed;
  handleSelectFeed: (id: string) => void;
  alertCount: number;
}
function Feed({ feed, handleSelectFeed, alertCount }: IFeedProps) {
  return (
    <div
      style={{
        cursor: "pointer",
        margin: "0.5rem",
        padding: "1rem",
        backgroundColor: "#333",
      }}
      onClick={() => handleSelectFeed(feed.id)}
    >
      <div>{feed.name}</div>
      <div>{feed.missionId}</div>
      <div>{feed.theaterId}</div>
      <div>{feed.status}</div>
      <div>{feed.lastDataAt}</div>
      <div>{alertCount}</div>
    </div>
  );
}

export default Feed;
