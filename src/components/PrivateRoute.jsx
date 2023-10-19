import { useAuth0 } from "@auth0/auth0-react";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { user } = useAuth0();
  return <>
    {user ? children : null}
    </>;
}
