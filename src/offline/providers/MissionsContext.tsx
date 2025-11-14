import { createContext, useContext } from "react";
import type { IMissionsContext } from "../types";

export const MissionsContext = createContext<IMissionsContext | null>(null);

export function useMissions() {
  const ctx = useContext(MissionsContext);
  if (!ctx)
    throw new Error("useMissions must be used inside a Missions Provider");
  return ctx;
}
