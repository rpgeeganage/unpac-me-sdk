/** PE section */
export interface ISection {
  /** Section characteristics */
  Characteristics: number;
  /** Section entropy */
  Entropy: number;
  /** MD5 of section data */
  MD5: string;
  /** Section name */
  Name: string;
  /** Hex encoded section name */
  Name_Hex: string;
  /** Number of line numbers */
  NumberOfLinenumbers: number;
  /** Number of relocations */
  NumberOfRelocations: number;
  /** Pointer to line numbers */
  PointerToLinenumbers: number;
  /** Pointer to raw data */
  PointerToRawData: number;
  /** Pointer to relocations */
  PointerToRelocations: number;
  /** SHA1 of section data */
  SHA1: string;
  /** SHA256 of section data */
  SHA256: string;
  /** Size of raw data */
  SizeOfRawData: number;
  /** Virtual address of section */
  VirtualAddress: number;
  /** Virtual size of section */
  VirtualSize: number;
}
