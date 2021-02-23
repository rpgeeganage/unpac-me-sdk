import * as http from '../http';
import * as entities from '../entities';

export interface IGetPrivateHistory {
  apiKey: string;
  cursor?: number;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateHistory
): Promise<entities.IHistory> {
  return client.get({
    query: {
      cursor: params.cursor
    },
    auth: params.apiKey,
    url: '/private/history'
  });
}
