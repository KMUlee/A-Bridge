const CognitoRegion = "us-west-1";
const CognitoUserPool = "us-west-1_lKRgAyyg0";
const CognitoUserPoolClient = "1hhlm9u7883vltsji66kft41hi";
const CognitoDomainPrefix = "toyseven-domain";

const amplifyConfig = {
  Auth: {
    region: CognitoRegion,
    userPoolId: CognitoUserPool,
    userPoolWebClientId: CognitoUserPoolClient,
    oauth: {
      domain: `https://abridge.auth.us-west-1.amazoncognito.com`,
      scope: ["email", "openid", "profile"],
      redirectSignIn: `http://localhost:3000`,
      redirectSignOut: `http://localhost:3000`,
      responseType: `code`,
    },
  },
};

export default amplifyConfig;
