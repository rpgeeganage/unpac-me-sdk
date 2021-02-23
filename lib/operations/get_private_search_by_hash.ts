import * as http from '../http';
import * as entities from '../entities';

export interface IGetPrivateSearchByHash {
  sampleHash: string;
  apiKey: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateSearchByHash
): Promise<entities.ISearchResults> {
  return client.get({
    auth: params.apiKey,
    url: `/private/search/hash/${params.sampleHash}`
  });
}
