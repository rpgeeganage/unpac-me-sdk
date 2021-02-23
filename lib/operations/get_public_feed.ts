import * as http from '../http';
import * as entities from '../entities';

export function exec(client: http.IHttp): Promise<entities.IPublicFeed> {
  return client.get({
    url: '/public/feed'
  });
}
