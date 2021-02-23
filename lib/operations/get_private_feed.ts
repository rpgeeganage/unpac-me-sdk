import * as http from '../http';
import * as entities from '../entities';

export interface IGetPrivateFeed {
  apiKey: string;
  cursor?: number;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateFeed
): Promise<entities.IPrivateFeed> {
  return client.get({
    auth: params.apiKey,
    query: params.cursor
      ? {
          cursor: params.cursor
        }
      : undefined,
    url: '/private/feed/unpacked'
  });
}
