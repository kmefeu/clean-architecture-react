import { ReactNode, createContext, useContext, useState } from "react";
import { AuthenticationFactory } from "../../../../core/injection-container/authentication/authentication-factory";
import { AuthenticationEntity } from "../../domain/entity/authentication-entity";

export interface ContextProvider {
  children: ReactNode;
}

interface AuthenticationContextInterface {
  authenticationEntity: AuthenticationEntity;
  requestAuthentication: () => void;
}

const defaultValues: AuthenticationContextInterface = {
  authenticationEntity: {
    credential: "",
  },
  requestAuthentication: () => {},
};

const AuthenticationContext =
  createContext<AuthenticationContextInterface>(defaultValues);

export const useAuthenticationContext = () => useContext(AuthenticationContext);

export const AuthenticationContextProvider: React.FC<ContextProvider> = ({
  children,
}: ContextProvider) => {
  return (
    <AuthenticationContext.Provider value={useAuthentication()}>
      {children}
    </AuthenticationContext.Provider>
  );
};

function useAuthentication() {
  const [authenticationEntity, setAuthenticationEntity] = useState(
    {} as AuthenticationEntity
  );

  const requestAuthentication = () => {
    const result = AuthenticationFactory().call;

    if (result instanceof AuthenticationEntity) {
      setAuthenticationEntity(result);
    }
  };

  return { authenticationEntity, requestAuthentication };
}

export default useAuthentication;
