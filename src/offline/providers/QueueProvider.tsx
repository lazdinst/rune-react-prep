import { useState } from "react";
import { QueueContext } from "./QueueContext";
import type { QueueState, QueueItem } from "../types";

export function QueueProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<QueueState>([]);

  const enqueue = (item: QueueItem) => {
    setQueue((prev) => [...prev, item]);
  };

  const markDone = (id: string) => {
    setQueue((prev) => prev.filter((a) => a.id !== id));
  };

  const markFailed = (id: string) => {
    setQueue((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, state: "FAILED", attempts: a.attempts + 1 } : a
      )
    );
  };

  return (
    <QueueContext.Provider value={{ queue, enqueue, markDone, markFailed }}>
      {children}
    </QueueContext.Provider>
  );
}
