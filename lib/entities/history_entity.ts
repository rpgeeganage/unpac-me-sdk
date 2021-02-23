import { IDeepMatchEntity } from './deep_match_entity';
import { IMalwareIdShort } from './malware_id_short';

export interface IHistoryEntity {
  /** AutoIt detected */
  autoit?: boolean;
  /** Number of unpacked children */
  children?: number;
  /** Submission timestamp */
  created?: number;
  /** DeepMatch matches */
  deepmatch?: IDeepMatchEntity[];
  /** Downloader detected */
  downloader?: boolean;
  /** Unpacking submission ID */
  id?: string;
  malwareid?: IMalwareIdShort[];
  malwareid_restricted?: IMalwareIdShort[];
  /** Parent submission SHA256 */
  sha256?: string;
  /** Unpacking status */
  status?: string;
  /** Sample is private */
  private?: boolean;
}
