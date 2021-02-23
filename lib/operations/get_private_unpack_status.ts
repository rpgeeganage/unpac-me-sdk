import * as http from '../http';
import * as entities from '../entities';

export interface IGetPrivateUnpackStatus {
  unpackId: string;
  apiKey: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateUnpackStatus
): Promise<entities.IUnpackStatus> {
  return client.get({
    auth: params.apiKey,
    url: `/private/status/${params.unpackId}`
  });
}
