import { IHttpBaseParams } from '../http';

export interface IDeletePrivateUserMalpedia {
  api_key: string;
}

export function build(params: IDeletePrivateUserMalpedia): IHttpBaseParams {
  return {
    url: '/private/user/malpedia',
    auth: params.api_key
  };
}
