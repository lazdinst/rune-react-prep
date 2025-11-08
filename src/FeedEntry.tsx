import React, { useMemo, useState } from "react";
import type { IFeedEntry } from "./types";
import { getFeedOnlineStatus, getLastUpdated } from "./utils";

interface IFeedEntryProps {
  feed: IFeedEntry | null;
  handleEntryClick: (entry: IFeedEntry) => void;
}

const FeedEntry: React.FC<IFeedEntryProps> = ({ feed, handleEntryClick }) => {
  const {
    name = "Unknwon",
    status = "OFFLINE",
    mode = "",
    lastUpdate = "",
    image = "",
  } = feed ?? {};

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const lastUpdated = useMemo(() => {
    return getLastUpdated(lastUpdate);
  }, [lastUpdate]);

  const handleClick = () => {
    if (feed) {
      console.log("click");
      handleEntryClick(feed);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        cursor: "pointer",
        border: `1px solid ${isHovered ? "red" : "rgb(0,0,0,0)"}`,
        padding: "1rem",
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={`${name}`} />
      <div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h3>{name.split("|")[0]}</h3>
            <span>{name.split("|")[1]}</span>
            <span style={{ fontWeight: "bold" }}>[ {mode} ]</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "1rem",
            }}
          >
            <span
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: `${
                  getFeedOnlineStatus(status) ? "green" : "red"
                }`,
                borderRadius: "50%",
              }}
            ></span>
          </div>
        </div>
        <div>{lastUpdated}</div>
      </div>
    </div>
  );
};

export default FeedEntry;
