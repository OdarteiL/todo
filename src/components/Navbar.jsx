import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="nav">
      <h1>Odartei</h1>
      <div className="links">
        <a href="">Todo</a>
        <a href="">About</a>

        {user && isAuthenticated ? (
          <a onClick={() => logout({ logoutParams: { returnTo: location.origin } })}>Logout</a>
        ) : (
          <a onClick={() => loginWithRedirect()}>Login</a>
        )}
      </div>
    </div>
  );
}
