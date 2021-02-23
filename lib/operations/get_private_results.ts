import * as http from '../http';
import * as entities from '../entities';

export interface IGetPrivateResults {
  unpackId: string;
  apiKey: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateResults
): Promise<entities.IUnpackResults> {
  return client.get({
    auth: params.apiKey,
    url: `/private/results/${params.unpackId}`
  });
}
