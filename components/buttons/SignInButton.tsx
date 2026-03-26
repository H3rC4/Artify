"use client";

import React, { use, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import logoGoogle from "../../public/images/google-logo.png";
import logoFb from "../../public/images/facebookBlack.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const SignInButton = () => {
  const router = useRouter();

  const { data: session } = useSession();
  
  let params = useSearchParams();
  let cb = params.get("p");
  if (session && session.user) {
    if (!cb) return router.push("/");
    return router.push(`${cb}`);
  }
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      <button
        className="border border-black gap-5 flex justify-center items-center hover:bg-[var(--background-sec)] text-lg font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
        type="button"
        onClick={() => signIn("google")}
      >
        <Image src={logoGoogle} width={20} height={20} alt="GoogleLogo" className="absolute top-10 bottom-10" />
        Continuar con Google
      </button>
      <button
        className="border border-black gap-5 flex justify-center items-center hover:bg-[#3b5998] hover:text-white text-lg font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
        type="button"
        onClick={() => signIn("facebook")}
      >
        <Image src={logoFb} width={20} height={20} alt="FacebookLogo" className="absolute top-10 bottom-10" />
        Continuar con Facebook
      </button>
    </div>
  );
};

export default SignInButton;
