import { createContext, useContext } from "react";
import type { IQueueContext } from "../types";

export const QueueContext = createContext<IQueueContext | null>(null);

export function useQueue() {
  const ctx = useContext(QueueContext);
  if (!ctx) throw new Error("useQueue must be used inside a NetworkProvider");
  return ctx;
}
