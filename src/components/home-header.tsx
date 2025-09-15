import LauchAppNav from "./launch-app-nav";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="bg-[url(../../public/Hero.svg)] h-[815px] border-b border-dark-border-gray">
      <Nav />
      <div className="flex h-11/12 md:h-full justify-center items-center flex-col gap-5 max-w-fix text-center mx-auto px-5 md:mt-0 mt-36">
        <span className="w-fit bg-dark-gray px-6 py-3 rounded-full ">
          Powered by Starknet
        </span>
        <h1 className="text-4xl md:text-6xl max-w-3xl">
          Empowering Decentralized Vulnerability Disclosure
        </h1>
        <p className="text-gray-text text-18">
          Join a trustless, transparent bounty platform connecting researchers
          and projects with seamless on-chain payouts.
        </p>
        <LauchAppNav />
      </div>
    </header>
  );
}
