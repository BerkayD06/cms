import { license } from "./license";

export interface Content {
  id?: number;
  name: string;
  status: string;
  posterUrl: string;
  licenses: license[];
  videoUrl: string;
}
