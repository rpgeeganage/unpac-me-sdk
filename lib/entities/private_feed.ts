import { IPrivateFeedEntity } from './private_feed_entity';

/** Private feed */
export interface IPrivateFeed {
  /** Cursor used to scroll to page of feed results */
  cursor?: number;
  /** Number of submissions in feed page */
  submission_count?: number;
  submissions?: IPrivateFeedEntity[];
}
