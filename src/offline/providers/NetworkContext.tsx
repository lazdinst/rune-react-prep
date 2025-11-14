import { createContext, useContext } from "react";
import type { INetworkContext } from "../types";

export const NetworkContext = createContext<INetworkContext | null>(null);

export function useNetwork() {
  const ctx = useContext(NetworkContext);
  if (!ctx) throw new Error("useNetwork must be used inside a NetworkProvider");
  return ctx;
}
