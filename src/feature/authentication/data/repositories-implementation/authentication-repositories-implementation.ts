import { AppError } from "../../../error/domain/entity/appError";
import { AuthenticationEntity } from "../../domain/entity/authentication-entity";
import { AuthenticationRepositoriesInterface } from "../../domain/repositories-interface/authentication-repositories-interface";
import { AuthenticationLocalDataSource } from "../data-source/authentication-local-data-source";
import { AuthenticationRemoteDataSource } from "../data-source/authentication-remote-data-source";

export class AuthenticationRepositoriesImplementation
  implements AuthenticationRepositoriesInterface
{
  remoteDataSource: AuthenticationRemoteDataSource;
  localDataSource: AuthenticationLocalDataSource;

  constructor(
    remoteDataSource: AuthenticationRemoteDataSource,
    localDataSource: AuthenticationLocalDataSource
  ) {
    this.remoteDataSource = remoteDataSource;
    this.localDataSource = localDataSource;
  }

  auth(): AppError | AuthenticationEntity {
    return this.remoteDataSource.auth();
  }
}
