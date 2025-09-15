import { GithubIcon, Telegram, X } from "@/icons/github";
import Image from "next/image";
import logo from "../../public/Logo (2).svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-7 py-5 border-t border-dark-border-gray">
      <nav className="max-w-sit-screen mx-auto flex gap-24 md:gap-0 py-5 md:py-0 md:justify-between items-center flex-col md:flex-row justify-center">
        <Link href="/">
          <Image src={logo} alt="forticahin" />
        </Link>
        <ul className="flex flex-col md:flex-row justify-between items-center gap-2">
          <li className="bg-dark-gray px-6 py-3 rounded-full">
            <Link href="/about">About</Link>
          </li>
          <li className="bg-dark-gray px-6 py-3 rounded-full ">
            <Link href="/documentation"> Documentation</Link>
          </li>
          <li className="bg-dark-gray px-6 py-3 rounded-full">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="bg-dark-gray px-6 py-3 rounded-full">
            <Link href="/privacy">Privacy</Link>
          </li>
          <li className="bg-dark-gray px-6 py-3 rounded-full">
            <Link href="/help-center">Help Center</Link>
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-2">
          <li className="bg-dark-gray p-3 rounded-full ">
            <Link href="https://x.com/Fortichain3" target="_blank">
              <X />
            </Link>
          </li>
          <li className="bg-dark-gray p-3 rounded-full ">
            <Link href="https://t.me/+4xRZ99AALDQ3MjQ0" target="_blank">
              <Telegram />
            </Link>
          </li>
          <li className="bg-dark-gray  p-3 rounded-full ">
            <Link
              href="https://github.com/skill-mind/Fortichain-web-app"
              target="_blank"
            >
              <GithubIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
