import { BiTimer } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import { Righteous } from "@next/font/google";

// change some default config of ubuntu fonts
const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

export default function Navbar() {
  return (
    <nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-1 cursor-pointer">
        <BiTimer className="text-4xl" />
        <h1 className={`text-2xl ${righteous.className}`}>focusfuse</h1>
      </div>
      <FiSettings className="text-2xl cursor-pointer" />
    </nav>
  );
}
