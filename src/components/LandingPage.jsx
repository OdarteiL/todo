import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {

    const { loginWithRedirect } = useAuth0();

  return (
    <>
        <div className="landing-container w-full md:flex md:px-[10%] md:mt-[5%]  ">
            <div className="image-side w-full  h-[100%] md:w-[50%] md:h-[500px] md:rounded-tl-md md:rounded-bl-md ">
                <img className=" h-full md:rounded-tl-md md:rounded-bl-md" src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1697134707/samples/cup-on-a-table.jpg" alt="image" width={'100%'} />
            </div>
            <div className="text-side w-full md:w-[50%] rounded-l-none rounded-r-md bg-[#012E40] text-white p-[40px] ">
                <h3 className=" font-thin italic text-[30px] mb-7  ">Welcome</h3>
                <h1 className=" font-extrabold text-[70px] md:text-[50px] ">POWER LIST <br /><span>APP</span></h1>

                <div className="start">
                <button onClick={() => loginWithRedirect()}>Get Started</button> 
            </div>
            </div>
        </div>
    </>
  )
}
