import { IMalwareIdShort } from './malware_id_short';

export interface IPrivateFeedEntity {
  /** AutoIt detected */
  autoit?: boolean;
  /** Number of unpacked children */
  child_count?: number;
  children?: {
    [key: string]: {
      /** AutoIt detected */
      autoit?: boolean;
      /** Downloader detected */
      downloader?: boolean;
      malwareid?: string[];
    };
  };
  /** Submission timestamp */
  created?: number;
  /** Downloader detected */
  downloader?: boolean;
  /** Unpacking submission ID */
  id?: string;
  malwareid?: IMalwareIdShort[];
  /** Parent submission SHA256 */
  submission_sha256?: string;
}
