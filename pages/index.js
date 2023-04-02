import { Inter } from "next/font/google";
 import HomePage from "../components/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className="pt-8">
      <HomePage />
    </div>
  );
}
