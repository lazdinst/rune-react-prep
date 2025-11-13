import { useState, useCallback, type ReactNode } from "react";
import { NetworkContext } from "./NetworkContext";
import type { INetworkContextValue } from "../types";

interface NetworkProviderProps {
  children: ReactNode;
}

export function NetworkProvider({ children }: NetworkProviderProps) {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const toggleOnline = () => {
    setIsOnline((previous) => !previous);
  };

  const setOnline = useCallback((value: boolean) => setIsOnline(value), []);

  const value: INetworkContextValue = {
    isOnline,
    toggleOnline,
    setOnline,
  };

  return (
    <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
  );
}
