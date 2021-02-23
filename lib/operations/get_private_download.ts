import * as fs from 'fs';

import * as http from '../http/';

export interface IGetPrivateDownload {
  apiKey: string;
  sampleHash: string;
}

export function exec(
  client: http.IHttp,
  params: IGetPrivateDownload
): Promise<fs.ReadStream> {
  return client.get({
    auth: params.apiKey,
    url: `/private/download/${params.sampleHash}`
  });
}
