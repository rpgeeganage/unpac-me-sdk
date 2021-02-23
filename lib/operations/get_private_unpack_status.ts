import { IHttpBaseParams } from '../http';

export interface IGetPrivateUnpackStatus {
  unpackId: string;
  apiKey: string;
}

export function build(params: IGetPrivateUnpackStatus): IHttpBaseParams {
  return {
    auth: params.apiKey,
    url: `/private/status/${params.unpackId}`
  };
}
