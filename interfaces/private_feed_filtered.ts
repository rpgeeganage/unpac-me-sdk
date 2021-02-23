import { IPrivateFeedEntity } from './private_feed_entity';

/** Private feed filtered by tag */
export interface IPrivateFeedFiltered {
  /** Cursor used to scroll to page of feed results */
  cursor?: number;
  /** Number of submissions in feed page */
  submission_count?: number;
  /** Type of tag used to filter feed */
  tag_type?: string;
  /** Tag label */
  tag_value?: string;
  submissions?: IPrivateFeedEntity[];
}
