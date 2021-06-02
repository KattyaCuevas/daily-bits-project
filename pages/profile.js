import Head from "next/head";
import Image from "next/image";

import Footer from "../components/footer";

const userInfo = {
  name: "Francisco Javier",
  email: "francisco.javier@gmail.com",
  imageUrl: "/images/user-photo.png",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-base">
      <Head>
        <title>Daily Bits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 bg-gray-900 text-white pt-12">
        <h1 className="mb-8 text-2xl">Perfil</h1>
        <div className=" w-32 h-32 mx-auto">
          <Image src={userInfo.imageUrl} width={120} height={120} />
        </div>
        <div className="flex flex-col text-center">
          <span className="text-lg">{userInfo.name}</span>
          <span className="text-sm">{userInfo.email}</span>
          <a className="text-red-500 mt-4">Cerrar sesión</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
