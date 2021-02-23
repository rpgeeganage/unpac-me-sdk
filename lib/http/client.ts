import FormData from 'form-data';
import axios, { AxiosRequestConfig } from 'axios';

import * as http from './http';
import { UnpacMeErrors } from '../error';

export class HttpClient implements http.IHttp {
  constructor(private baseUrl: string) {}

  get<R>(params: http.IHttpBaseParams): Promise<R> {
    const config: AxiosRequestConfig = {
      method: 'GET'
    };

    return this.axiosRequest<R>(params, config);
  }

  post<B, R>(params: http.IHttpPostParams<B>): Promise<R> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      data: params.body
    };

    return this.axiosRequest<R>(params, config);
  }

  delete<R>(params: http.IHttpBaseParams): Promise<R> {
    const config: AxiosRequestConfig = {
      method: 'DELETE'
    };

    return this.axiosRequest<R>(params, config);
  }

  upload<R>(params: http.IHttpUpload): Promise<R> {
    const formData = new FormData();
    formData.append('file', params.file);

    const config: AxiosRequestConfig = {
      method: 'POST',
      headers: formData.getHeaders()
    };

    return this.axiosRequest<R>(params, config);
  }

  private async axiosRequest<R>(
    requestParams: http.IHttpBaseParams,
    axiosParams: AxiosRequestConfig
  ) {
    if (requestParams.auth) {
      axiosParams.headers.common = {
        Authorization: `Key ${requestParams.auth}`
      };
    }

    if (requestParams.query) {
      axiosParams.params = requestParams.query;
    }

    try {
      const { data } = await axios({
        ...axiosParams.params,
        ...{
          baseURL: this.baseUrl,
          url: requestParams.url
        }
      });

      return <R>data;
    } catch (error) {
      if (error.response) {
        const { Error, Description } = error.response.data;

        throw new UnpacMeErrors({
          error: Error,
          description: Description
        });
      }

      throw new UnpacMeErrors({
        error: 'Unknown',
        description: error.message
      });
    }
  }
}
