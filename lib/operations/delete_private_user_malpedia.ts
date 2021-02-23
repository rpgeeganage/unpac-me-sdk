import * as http from '../http';
import * as entities from '../entities';

export interface IDeletePrivateUserMalpedia {
  apiKey: string;
}

export function exec(
  client: http.IHttp,
  params: IDeletePrivateUserMalpedia
): Promise<entities.IUserMalpedia> {
  return client.delete({
    auth: params.apiKey,
    url: '/private/user/malpedia'
  });
}
