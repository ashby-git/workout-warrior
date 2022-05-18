import React, { useEffect } from "react";
import { Popover } from "@headlessui/react";
import { FcGoogle } from "react-icons/Fc";
import { CgFacebook } from "react-icons/Cg";
import { FaGithub } from "react-icons/Fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="relative bg-white overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-screen w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block lg:inline">Workout</span>{" "}
                <span className="block text-indigo-600 lg:inline">Warrior</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Workout Warrior is the best minimalist workout tracker
                available. Login below to get started. There you can track your
                training, create or follow training programs, and reach your
                fitness goals!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => signIn("facebook")}
                    title="Login with Facebook"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 md:w-44"
                  >
                    <CgFacebook size="28" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => signIn("google")}
                    title="Login with Google"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 md:py-4 md:text-lg md:px-10 md:w-44"
                  >
                    <FcGoogle size="28" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => signIn("github")}
                    title="Login with Github"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 md:py-4 md:text-lg md:px-10 md:w-44"
                  >
                    <FaGithub size="28" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/workout-image.jpg"
          alt="workoutImage"
        />
      </div>
    </div>
  );
};

export default Login;
