import { useState } from "react";
import { NetworkContext } from "./NetworkContext";

export function NetworkProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(true);

  const toggleOnline = () => setIsOnline((prev) => !prev);

  return (
    <NetworkContext.Provider value={{ isOnline, toggleOnline }}>
      {children}
    </NetworkContext.Provider>
  );
}
