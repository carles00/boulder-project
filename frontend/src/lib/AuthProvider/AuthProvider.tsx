import { Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";

interface Props{
  children: ReactNode
}

export default function AuthProvider({children}:Props){
  return(
    <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT}
        authorizationParams={{
          redirect_uri: import.meta.env.VITE_AUTH0_LOGIN_REDIRECT,
          audience: import.meta.env.VITE_AUTH0_AUDIENCE
        }}
      >
        {children}
    </Auth0Provider>
  )
}