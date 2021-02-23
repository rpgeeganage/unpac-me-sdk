import * as http from '../http';
import * as entities from '../entities';

export interface IGetPublicResults {
  unpack_id: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPublicResults
): Promise<entities.EnumStatus> {
  return client.get({
    url: `/public/results/${params.unpack_id}`
  });
}
