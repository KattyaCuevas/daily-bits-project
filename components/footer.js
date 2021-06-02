import Link from "next/link";
import { useRouter } from "next/router";

import HomeIcon from "../icons/home";
import ActivityIcon from "../icons/activity";
import UserIcon from "../icons/user";

export default function Footer() {
  const { route } = useRouter();
  return (
    <footer className="flex items-center w-full h-24 bg-gray-800 text-white">
      <Link href="/">
        <a
          className={`${
            route === "/" ? "text-green-500" : ""
          } w-full flex flex-col items-center`}
        >
          <HomeIcon color={route === "/" ? "#2CB67D" : "#FFFFFE"} />
          Home
        </a>
      </Link>
      <Link href="/activity">
        <a
          className={`${
            route === "/activity" ? "text-green-500" : ""
          } w-full flex flex-col items-center`}
        >
          <ActivityIcon color={route === "/activity" ? "#2CB67D" : "#FFFFFE"} />
          Activity
        </a>
      </Link>
      <Link href="/profile">
        <a
          className={`${
            route === "/profile" ? "text-green-500" : ""
          } w-full flex flex-col items-center`}
        >
          <UserIcon color={route === "/profile" ? "#2CB67D" : "#FFFFFE"} />
          Profile
        </a>
      </Link>
    </footer>
  );
}
