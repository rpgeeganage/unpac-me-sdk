import * as http from '../http';
import * as entities from '../entities';

export interface IGetPrivateUserMalpedia {
  apiKey: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateUserMalpedia
): Promise<entities.IUserMalpedia> {
  return client.get({
    auth: params.apiKey,
    url: '/private/user/malpedia'
  });
}
