import Image from "next/image";
import { Inter, Lateef, Poppins } from "next/font/google";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const lateef = Lateef({ subsets: ["latin"], weight: "500" });
const poppins = Poppins({ subsets: ["latin"], weight: "200" });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex b min-h-screen flex-col items-center justify-between p-24 ${poppins.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-2xl lg:flex">
        <div className="text-center">
          <p className=" text-2xl font-semibold ml-auto mr-auto mt-8 text-black">
            Get Started
          </p>
        </div>
        <div>
          <Link href={"/auth"}>
            <div className="h-[99px] cursor-pointer drop-shadow-lg shadow-lg w-[99px] py-7 px-5 mt-[370px] ml-auto mr-auto rounded-full bg-black">
              <FiArrowRight className="w-12 text-white h-12 ml-auto mr-auto" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
