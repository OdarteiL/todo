import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {

    const { loginWithRedirect } = useAuth0();

  return (
    <>
        <div className="landing-container">
            <div className="image-side">
                <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1697134707/samples/cup-on-a-table.jpg" alt="image" width={'100%'} height={'100%'} />
            </div>
            <div className="text-side">
                <h3>Welcome</h3>
                <h1>POWER LIST <br /><span>APP</span></h1>

                <div className="start">
                <button onClick={() => loginWithRedirect()}>Get Started</button>
            </div>
            </div>
        </div>
    </>
  )
}
