import { ReadStream } from 'fs';

import * as http from '../http';
import * as entities from '../entities';

export interface IPostPrivateUpload {
  private?: boolean;
  file: ReadStream;
  apiKey: string;
}

export function exec(
  client: http.IHttp,
  params: IPostPrivateUpload
): Promise<entities.IUpload> {
  return client.upload({
    auth: params.apiKey,
    url: '/private/upload/',
    query: {
      private: params.private
    },
    file: params.file
  });
}
