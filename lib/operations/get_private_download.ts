import { IHttpBaseParams } from '../http';

export interface IGetPrivateDownload {
  sample_hash: string;
}

export function build(params: IGetPrivateDownload): IHttpBaseParams {
  return {
    url: '/private/user/malpedia',
    auth: params.api_key
  };
}
