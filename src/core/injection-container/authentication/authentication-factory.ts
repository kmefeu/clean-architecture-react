import { AuthenticationLocalDataSource } from "../../../feature/authentication/data/data-source/authentication-local-data-source";
import { AuthenticationRemoteDataSource } from "../../../feature/authentication/data/data-source/authentication-remote-data-source";
import { AuthenticationRepositoriesImplementation } from "../../../feature/authentication/data/repositories-implementation/authentication-repositories-implementation";
import { Authentication } from "../../../feature/authentication/domain/use-case/authentication";

export const AuthenticationFactory = () =>
  new Authentication(
    new AuthenticationRepositoriesImplementation(
      new AuthenticationRemoteDataSource(),
      new AuthenticationLocalDataSource()
    )
  );
