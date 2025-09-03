import Image from "next/image";
import logo from "../../public/Logo (2).svg";
import Link from "next/link";
export default function Page() {
  return (
    <div className="bg-[url(../../public/404.svg)] h-screen bg-no-repeat bg-size-[auto_15%]  sm:bg-size-[auto_20%] md:bg-auto bg-center">
      <div className="px-3 py-5 border-t w-full text-center h-fit border-dark-border-gray items-center border-b flex justify-center absolute top-0">
        <Image src={logo} alt="fortichain" />
      </div>
      <div className="w-full h-full flex items-center justify-center relative">
        <h1 className="bg-main-bg p-1 md:p-2.5 w-full text-center text-gray-text text-2xl md:text-[32px]">
          There’s Nothing To See Here
        </h1>
        <Link
          href="/"
          className="min-w-[258px] min-h-50 p-0.5 group
           bg-sky-blue-border
           hover:bg-sky-blue-border
       rounded-full group absolute bottom-36"
        >
          <span
            className="px-6 py-3
               from-sky-from to-sky-to
               bg-gradient-to-r
           flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
          >
            Back to Homepage
          </span>
        </Link>
      </div>
    </div>
  );
}
