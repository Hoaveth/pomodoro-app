import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-4xl min-h-screen mx-auto">
        <Navbar />
      </div>
    </div>
  );
}
