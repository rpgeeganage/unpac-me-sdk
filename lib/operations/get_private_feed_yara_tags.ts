import * as http from '../http';
import * as entities from '../entities';

export interface IGetPrivateFeedYaraTags {
  apiKey: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateFeedYaraTags
): Promise<entities.IPrivateFeedYaraTags> {
  return client.get({
    auth: params.apiKey,
    url: '/private/feed/unpacked/yara'
  });
}
