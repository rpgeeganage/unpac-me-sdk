/** PE file resource */
export interface IResource {
  /** Codepage */
  codepage: number;
  /** Language */
  lang: string;
  /** Resource type */
  magic_type: string;
  /** Resource offset */
  offset: number;
  /** Resource size */
  size: number;
  /** Sub-Language */
  sublang: string;
}
