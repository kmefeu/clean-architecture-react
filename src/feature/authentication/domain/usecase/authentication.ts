import { UseCase } from "../../../../core/domain/usecase/usecase";
import { AppError } from "../../../error/domain/entity/appError";
import { AuthenticationEntity } from "../entity/authenticationEntity";

export interface AuthenticationParams {}

export class Authentication extends UseCase<
  AuthenticationEntity,
  AuthenticationParams
> {
  call(): AuthenticationEntity | AppError {
    return new Error();
  }
}
