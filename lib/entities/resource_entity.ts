import { IResourceEntry } from './resource_entry';

export interface IResourceEntity {
  entries?: IResourceEntry[];
  /** Resource type */
  name?: string;
}
