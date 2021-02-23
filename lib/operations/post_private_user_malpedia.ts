import * as http from '../http';
import * as entities from '../entities';

export interface IPostPrivateUserMalpedia {
  apiKey: string;
  token: string;
}

export function exec(
  client: http.IHttp,
  params: IPostPrivateUserMalpedia
): Promise<entities.IUserMalpedia> {
  return client.post({
    auth: params.apiKey,
    url: '/private/user/malpedia',
    body: {
      token: params.token
    }
  });
}
