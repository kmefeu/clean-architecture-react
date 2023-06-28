import { AppError } from "../../../error/domain/entity/appError";
import { AuthenticationEntity } from "../entity/authentication-entity";

export abstract class AuthenticationRepositoriesInterface {
  auth(): AuthenticationEntity | AppError {
    return new Error();
  }
}
