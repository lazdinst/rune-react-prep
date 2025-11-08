import React, { useMemo } from "react";
import type { IFeeds, IFeedEntry } from "./types";
import FeedEntry from "./FeedEntry";
import { getFeedOnlineStatus } from "./utils";

interface IFeedProps {
  feeds: IFeeds;
  handleEntryClick: (entry: IFeedEntry) => void;
}

const Feed: React.FC<IFeedProps> = ({ feeds, handleEntryClick }) => {
  const numberOfOnlineFeeds = useMemo(() => {
    return feeds.filter((feed) => getFeedOnlineStatus(feed.status)).length;
  }, [feeds]);

  return (
    <div>
      <div>Online: {numberOfOnlineFeeds}</div>
      <div>
        {feeds.map((feed) => (
          <FeedEntry feed={feed} handleEntryClick={handleEntryClick} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
