import { UseCase } from "../../../../core/domain/use-case/use-case";
import { AppError } from "../../../error/domain/entity/appError";
import { AuthenticationEntity } from "../entity/authentication-entity";
import { AuthenticationRepositoriesInterface } from "../repositories-interface/authentication-repositories-interface";

export interface AuthenticationParams {}

export class Authentication extends UseCase<
  AuthenticationEntity,
  AuthenticationParams
> {
  repositoriesInterface: AuthenticationRepositoriesInterface;

  constructor(repositoriesInterface: AuthenticationRepositoriesInterface) {
    super();
    this.repositoriesInterface = repositoriesInterface;
  }

  call(): AuthenticationEntity | AppError {
    return this.repositoriesInterface.auth();
  }
}
