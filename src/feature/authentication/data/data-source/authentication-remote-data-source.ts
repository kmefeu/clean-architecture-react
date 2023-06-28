import { AuthenticationModel } from "../model/authentication-model";

export class AuthenticationRemoteDataSource {
  auth() {
    return new AuthenticationModel("new_token").fromJson("new_token");
  }
}
