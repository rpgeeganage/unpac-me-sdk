/** User settings */
export interface IUserAccess {
  /** API key */
  api_key: string;
  /** Sample feed direct download URL (only available to Feed subscribers) */
  feed_download_url?: string;
  /** Sample feed direct download password (only available to Feed subscribers) */
  feed_password?: string;
  /** Sample feed direct download username (only available to Feed subscribers) */
  feed_username?: string;
  /** Monthly upload limit */
  month_limit: number;
  /** Number of submissions for the current month */
  month_submissions: number;
  /** Number of private submissions for the current month */
  month_submissions_private?: number;
  /** Service access roles */
  roles: string[];
  /** Lifetime total number of submissions */
  total_submissions: number;
}
