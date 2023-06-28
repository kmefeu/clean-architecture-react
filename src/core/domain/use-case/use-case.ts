import { AppError } from "../../../feature/error/domain/entity/appError";

export abstract class UseCase<Entity, Params> {
  call(params?: Params): Entity | AppError {
    return {} as Entity;
  }
}
