import type { IFeeds } from "./types";
export const data: IFeeds = [
  {
    name: "GHST 345 | Drone |",
    status: "ONLINE",
    mode: "Scan And Track",
    assetId: "0XCC14",
    assetLocation: "33.56, -121.54",
    lastUpdate: "2025-11-08T13:13:01.225Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/48px-User_icon_2.svg.png",
  },
  {
    name: "INT A620 | Interceptor |",
    status: "ONLINE",
    mode: "Scan And Track",
    assetId: "0XCC15",
    assetLocation: "33.56, -121.54",
    lastUpdate: new Date(),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/48px-User_icon_2.svg.png",
  },
  {
    name: "GHST 271 | Drone |",
    status: "OFFLINE",
    mode: "Scan And Track",
    assetId: "0XCC16",
    assetLocation: "33.56, -121.54",
    lastUpdate: "2025-11-07T13:13:01.225Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/48px-User_icon_2.svg.png",
  },
];
export default data;
