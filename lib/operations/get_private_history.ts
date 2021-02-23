import { IHttpBaseParams } from "../http";

export interface IGetPrivateHistory {
  cursor?: number;
}

export function build(params: IGetPrivateResults): IHttpBaseParams {
  return {
    auth: params.apiKey,
    query: `/private/results/${params.unpackId}`
  };
}
