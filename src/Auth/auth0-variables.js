export const AUTH_CONFIG = {
  domain: 'dev-o52j-icr.auth0.com',
  clientId: '1G8dsKS27k76se8dCcRt5i0baGFEFK2t',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://hulk.theironnetwork.org/callback'
}