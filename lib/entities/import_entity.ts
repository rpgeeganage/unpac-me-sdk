import { IFunction } from './function';

/** PE file import entity */
export interface IImportEntity {
  /** Library name */
  library: string;
  functions: IFunction[];
}
