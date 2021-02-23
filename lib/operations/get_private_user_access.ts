import * as http from '../http';
import * as entities from '../entities';

export function exec(client: http.IHttp): Promise<entities.IUserAccess> {
  return client.get({
    url: '/private/user/access'
  });
}
