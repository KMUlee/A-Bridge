import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const Login = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Authenticator />
    </div>
  );
};

export default Login;
