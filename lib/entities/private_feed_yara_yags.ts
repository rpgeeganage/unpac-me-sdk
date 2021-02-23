/** Private feed yara tags */
export interface IPrivateFeedYaraTags {
  /** Numer of tags available */
  count?: number;
  /** Yara tag names */
  malwareid?: { [key: string]: number };
}
