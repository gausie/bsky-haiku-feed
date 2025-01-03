import { Database } from "./db";
import { DidResolver } from "@atproto/identity";

export type AppContext = {
  db: Database;
  didResolver: DidResolver;
  cfg: Config;
};

export type Config = {
  port: number;
  hostname: string;
  postgresConnectionString: string;
  subscriptionEndpoint: string;
  serviceDid: string;
  publisherDid: string;
  subscriptionReconnectDelay: number;
};
