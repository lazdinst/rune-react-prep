import { useContext } from "react";
import { NetworkContext } from "./NetworkContext";

export function useNetwork() {
  const ctx = useContext(NetworkContext);
  if (!ctx) {
    throw new Error("useNetwork context has no context");
  }
  return ctx;
}
