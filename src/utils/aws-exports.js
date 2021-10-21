import * as config from '@/site-config/site.json'

const awsConfig = {
  Auth: {
    region: config.awsConfig.region,
    userPoolId: config.awsConfig.userPoolId,
    userPoolWebClientId: config.awsConfig.userPoolWebClientId,
    oauth: {
      domain: "pennsieve.auth.us-east-1.amazoncognito.com",
      scope: ['openid'],
      redirectSignIn: 'http://localhost:3000',
      redirectSignOut: 'http://localhost:3000/logout',
      responseType: 'token',
    }
  }
}
export default awsConfig