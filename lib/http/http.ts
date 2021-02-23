import { ReadStream } from 'fs';

export interface IHttpBaseParams {
  url: string;
  query?: { [key: string]: unknown };
  auth?: string;
}

export interface IHttpPostParams<B> extends IHttpBaseParams {
  body: B;
}
export interface IHttpUpload extends IHttpBaseParams {
  file: ReadStream;
}

export interface IHttp {
  get<R>(params: IHttpBaseParams): Promise<R>;
  post<B, R>(params: IHttpPostParams<B>): Promise<R>;
  delete<R>(params: IHttpBaseParams): Promise<R>;
  upload<R>(params: IHttpUpload): Promise<R>;
}
