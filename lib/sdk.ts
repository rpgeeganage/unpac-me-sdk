import * as fs from 'fs';

import * as http from './http';
import * as operations from './operations';
import * as entities from './entities';

export class Sdk {
  private readonly httpClient: http.IHttp;
  constructor(baseUrl: string) {
    this.httpClient = new http.HttpClient(baseUrl);
  }

  deletePrivateUserMalpedia(
    params: operations.DeletePrivateUserMalpedia.IDeletePrivateUserMalpedia
  ): Promise<entities.IUserMalpedia> {
    return operations.DeletePrivateUserMalpedia.exec(this.httpClient, params);
  }

  getPrivateDownload(
    params: operations.GetPrivateDownload.IGetPrivateDownload
  ): Promise<fs.ReadStream> {
    return operations.GetPrivateDownload.exec(this.httpClient, params);
  }

  getPrivateFeed(
    params: operations.GetPrivateFeed.IGetPrivateFeed
  ): Promise<entities.IPrivateFeed> {
    return operations.GetPrivateFeed.exec(this.httpClient, params);
  }

  gGetPrivateFeedYaraFiltered(
    params: operations.GetPrivateFeedYaraFiltered.IGetPrivateFeedYaraFiltered
  ): Promise<entities.IPrivateFeedFiltered> {
    return operations.GetPrivateFeedYaraFiltered.exec(this.httpClient, params);
  }

  getPrivateFeedYaraTags(
    params: operations.GetPrivateFeedYaraTags.IGetPrivateFeedYaraTags
  ): Promise<entities.IPrivateFeedYaraTags> {
    return operations.GetPrivateFeedYaraTags.exec(this.httpClient, params);
  }

  getPrivateHistory(
    params: operations.GetPrivateHistory.IGetPrivateHistory
  ): Promise<entities.IHistory> {
    return operations.GetPrivateHistory.exec(this.httpClient, params);
  }

  getPrivateResults(
    params: operations.GetPrivateResults.IGetPrivateResults
  ): Promise<entities.IUnpackResults> {
    return operations.GetPrivateResults.exec(this.httpClient, params);
  }

  getPrivateSearchByHash(
    params: operations.GetPrivateSearchByHash.IGetPrivateSearchByHash
  ): Promise<entities.ISearchResults> {
    return operations.GetPrivateSearchByHash.exec(this.httpClient, params);
  }

  getPrivateUnpackStatus(
    params: operations.GetPrivateUnpackStatus.IGetPrivateUnpackStatus
  ): Promise<entities.IUnpackStatus> {
    return operations.GetPrivateUnpackStatus.exec(this.httpClient, params);
  }

  getPrivateUserAccess(): Promise<entities.IUserAccess> {
    return operations.GetPrivateUserAccess.exec(this.httpClient);
  }

  getPrivateUserMalpedia(
    params: operations.GetPrivateUserMalpedia.IGetPrivateUserMalpedia
  ): Promise<entities.IUserMalpedia> {
    return operations.GetPrivateUserMalpedia.exec(this.httpClient, params);
  }

  getPublicResults(
    params: operations.GetPublicResults.IGetPublicResults
  ): Promise<entities.EnumStatus> {
    return operations.GetPublicResults.exec(this.httpClient, params);
  }

  getPublicUnpackStatus(
    params: operations.GetPublicUnpackStatus.IGetPublicUnpackStatus
  ): Promise<entities.EnumStatus> {
    return operations.GetPublicUnpackStatus.exec(this.httpClient, params);
  }

  postPrivateUpload(
    params: operations.PostPrivateUpload.IPostPrivateUpload
  ): Promise<entities.IUpload> {
    return operations.PostPrivateUpload.exec(this.httpClient, params);
  }

  postPrivateUserMalpedia(
    params: operations.PostPrivateUserMalpedia.IPostPrivateUserMalpedia
  ): Promise<entities.IUserMalpedia> {
    return operations.PostPrivateUserMalpedia.exec(this.httpClient, params);
  }
}
