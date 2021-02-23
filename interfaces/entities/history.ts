import { IHistoryEntity } from './history_entity';

/** Public feed */
export interface IHistory {
  /** Cursor used to scroll to page of results */
  cursor?: number;
  results?: IHistoryEntity[];
}
