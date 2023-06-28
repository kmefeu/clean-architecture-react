import { useAuthenticationContext } from "./useAuthentication";

function AuthenticationPage() {
  const { requestAuthentication } = useAuthenticationContext();

  return (
    <div>
      <button onClick={requestAuthentication}>Authenticar</button>
    </div>
  );
}

export default AuthenticationPage;
