import { useState, useEffect, useCallback } from "react";
import { data } from "./data";
import type { IFeedEntry, IFeeds } from "./types";
import Feed from "./Feed";
import Modal from "./Modal";
import Map from "./Map";

const LoadingPage = {
  color: "red",
};

const FeedsWrapper: React.CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  color: "lime",
};

const App: React.FC = () => {
  const [feeds, setFeeds] = useState<IFeeds>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [entry, setEntry] = useState<IFeedEntry | null>(null);
  const [filteredFeeds, setFilteredFeeds] = useState<IFeeds>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [debouncedFilter, setDebouncedFilter] = useState<string | null>(null);

  const handleEntryClick = useCallback((entry: IFeedEntry) => {
    setEntry(entry);
    setIsOpen(true);
  }, []);

  {
    /** Fetch the Feed Data */
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchItems();
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const fetchItems = () => {
    setFeeds(data);
  };

  {
    /* Debounce the Input*/
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilter(filter);
    }, 500);
    return () => clearTimeout(timer);
  }, [filter]);

  useEffect(() => {
    const sanitized = debouncedFilter?.trim().toLowerCase();

    if (!sanitized) {
      setFilteredFeeds(feeds);
      return;
    }

    const searchTerms = sanitized.split(/\s+/);
    const filtered = feeds.filter((feed) => {
      const haystack = `${feed.name} ${feed.mode} ${feed.status}`.toLowerCase();
      return searchTerms.every((term) => haystack.includes(term));
    });

    setFilteredFeeds(filtered);
  }, [debouncedFilter, feeds]);

  if (isLoading) return <div style={LoadingPage}>Loading</div>;

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Modal isOpen={isOpen} entry={entry} setIsOpen={setIsOpen} />
      <div style={FeedsWrapper}>
        <div>
          <input onChange={handleOnInputChange} />
        </div>
        <Feed feeds={filteredFeeds} handleEntryClick={handleEntryClick} />
        <Map feeds={filteredFeeds} />
      </div>
    </div>
  );
};

export default App;
