export interface Authentication {
  auth: (params: Authentication.Params) => Promise<Authentication.Entity>;
}

export namespace Authentication {
  export type Params = {
    email?: string;
    password?: string;
  };

  export type Entity = Credential;
}
