import { IDeepMatchEntity } from './deep_match_entity';
import { IMalwareId } from './malware_id';
import { IMalwareIdShort } from './malware_id_short';

export interface IFeedEntity {
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
  malwareid?: IMalwareId[];
  malwareid_restricted?: IMalwareIdShort[];
  /** Parent submission SHA256 */
  sha256?: string;
  /** Unpacking status */
  status?: string;
}
