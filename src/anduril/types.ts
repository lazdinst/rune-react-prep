export interface IFeedEntry {
  name: string;
  status: IFeedStatus;
  mode: string;
  assetId: string;
  assetLocation: string;
  lastUpdate: string | Date;
  image: string;
}

export type IFeeds = IFeedEntry[];

export type IFeedStatus = "ONLINE" | "OFFLINE";
