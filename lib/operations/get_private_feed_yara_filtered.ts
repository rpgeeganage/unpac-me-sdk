import * as http from '../http';
import * as entities from '../entities';

export interface IGetPrivateFeedYaraFiltered {
  apiKey: string;
  yaraRule: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateFeedYaraFiltered
): Promise<entities.IPrivateFeedFiltered> {
  return client.get({
    auth: params.apiKey,
    url: `/private/feed/unpacked/yara/${params.yaraRule}`
  });
}
