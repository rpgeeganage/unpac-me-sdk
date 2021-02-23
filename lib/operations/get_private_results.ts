import { IHttpBaseParams } from '../http';

export interface IGetPrivateResults {
  unpackId: string;
  apiKey: string;
}

export function build(params: IGetPrivateResults): IHttpBaseParams {
  return {
    auth: params.apiKey,
    url: `/private/results/${params.unpackId}`
  };
}
