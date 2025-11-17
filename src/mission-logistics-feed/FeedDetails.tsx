import type { IEdgeFeed } from "./types";

interface IFeedDetailsProps {
  feed: IEdgeFeed;
}
function FeedDetails({ feed }: IFeedDetailsProps) {
  return (
    <div>
      <pre>{JSON.stringify(feed, null, 2)}</pre>
    </div>
  );
}

export default FeedDetails;
