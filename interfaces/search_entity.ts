export interface ISearchEntity {
  /** Submission timestamp */
  created?: number;
  /** Unpacking submission ID */
  submission_id?: string;
  children?: string[];
  /** Parent submission SHA256 */
  sha256?: string;
  /** Unpacking status */
  status?: string;
  /** Sample metadata */
  metadata?: string;
}
