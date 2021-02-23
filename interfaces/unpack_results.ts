import { EnumStatus } from './status';
import { IResult } from './result';

/** Unpack submission results */
export interface IUnpackResults {
  /** Unpack submission ID */
  id: string;
  status: EnumStatus;
  /** SHA256 hash of the submitted file */
  sha256: string;
  /** Timestamp of original submission (in UTC) */
  time: number;
  /** Sample is private */
  private?: boolean;
  /** Sample was submitted by current user */
  user_submitted?: boolean;
  /** Array of results from submission, including the parent */
  results: IResult[];
}
