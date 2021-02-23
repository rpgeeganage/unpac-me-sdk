import * as entities from '../entities';
import * as http from '../http';

export interface IGetPublicUnpackStatus {
  unpack_id: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPublicUnpackStatus
): Promise<entities.EnumStatus> {
  return client.get({
    url: `/public/status/${params.unpack_id}`
  });
}
