import { EnumStatus } from './status';

/** Unpack submission status */
export interface IUnpackStatus {
  /** Unpack submission ID */
  id: string;
  status: EnumStatus;
}
