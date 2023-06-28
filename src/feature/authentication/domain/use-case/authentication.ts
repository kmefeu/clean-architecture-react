import { UseCase } from "../../../../core/domain/use-case/use-case";
import { AppError } from "../../../error/domain/entity/appError";
import { AuthenticationEntity } from "../entity/authentication-entity";

export interface AuthenticationParams {}

export class Authentication extends UseCase<
  AuthenticationEntity,
  AuthenticationParams
> {
  call(): AuthenticationEntity | AppError {
    return new Error();
  }
}
