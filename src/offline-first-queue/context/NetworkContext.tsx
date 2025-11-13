import { createContext } from "react";
import type { INetworkContextValue } from "../types";

export const NetworkContext = createContext<INetworkContextValue | undefined>(
  undefined
);
