import { IExport } from './export';
import { IImportEntity } from './import_entity';
import { IResourceEntity } from './resource_entity';
import { IRichHeader } from './rich_header';
import { ISection } from './section';
import { IDeepMatchEntity } from './deep_match_entity';
import { IDetectItEntity } from './detect_it_entity';
import { IMalwareId } from './malware_id';

/** Unpack result */
export interface IResult {
  hashes: {
    /** MD5 hash of sample */
    md5?: string;
    /** SHA1 hash of sample */
    sha1?: string;
    /** SHA256 hash of sample */
    sha256?: string;
  };
  analysis: {
    exports?: {
      /** Export count */
      count?: number;
      functions?: IExport[];
    };
    imports?: {
      /** Import count */
      count?: number;
      entities?: IImportEntity[];
    };
    metadata?: {
      Characteristics?: string[];
      /** PE file checksum */
      Checksum?: number;
      /** PE file compile time */
      'Compile Time'?: string;
      /** PE file contains compressed data */
      'Contains Compressed Data'?: boolean;
      /** Entry point first 16 bytes */
      'EP Bytes'?: string;
      /** PE file entry point */
      'Entry Point'?: number;
      /** PE file image base */
      'Image Base'?: number;
      /** PE file linker version */
      'Linker Version'?: string;
      /** PE file program database file path */
      'PDB Path'?: string;
      /** Number of sections */
      Sections?: number;
      /** PE file signature */
      Signature?: number;
      /** PE file size */
      Size?: number;
      /** PE file subsystem */
      Subsystem?: string;
      /** PE file type */
      Type?: string;
      VersionInfo?: {
        StringInfo?: {
          /** Company name */
          CompanyName?: string;
          /** File description */
          FileDescription?: string;
          /** File version */
          FileVersion?: string;
          /** Legal copyright */
          LegalCopyright?: string;
          /** Original file name */
          OriginalFilename?: string;
          /** Product name */
          ProductName?: string;
          /** Product version */
          ProductVersion?: string;
        };
        VarInfo?: {
          /** Language ID */
          LangID?: string;
          /** Translation */
          Translation?: string;
          /** Character set ID */
          charsetID?: string;
        };
      };
    };
    resources?: IResourceEntity[];
    rich_headers?: {
      /** Rich header checksum */
      Checksum?: string;
      Entries?: IRichHeader[];
    };
    sections?: ISection[];
  };
  deepmatch?: IDeepMatchEntity[];
  detectit?: IDetectItEntity[];
  malware_id?: IMalwareId[];
  malware_id_restricted?: IMalwareId[];
  strings?: {
    ascii?: string[];
    stack?: string[];
    wide?: string[];
  };
  urls?: string[];
}
