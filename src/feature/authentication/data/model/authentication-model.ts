import { AuthenticationEntity } from "../../domain/entity/authentication-entity";

export class AuthenticationModel extends AuthenticationEntity {
  constructor(credential: any) {
    super();
    this.credential = credential;
  }

  fromJson(credential: any) {
    //TODO do some real parsing operation
    return new AuthenticationModel(credential);
  }
}
