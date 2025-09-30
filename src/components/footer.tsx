"use client";
import { GithubIcon, Telegram, X } from "@/icons/github";
import Image from "next/image";
import logo from "../../public/Logo (2).svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className="px-7 py-5 border-t border-dark-border-gray"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <nav className="max-w-sit-screen mx-auto flex gap-24 md:gap-0 py-5 md:py-0 md:justify-between items-center flex-col md:flex-row justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Link href="/">
            <Image src={logo} alt="forticahin" />
          </Link>
        </motion.div>

        <motion.ul
          className="flex flex-col md:flex-row justify-between items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { href: "/about", text: "About" },
            { href: "/documentation", text: "Documentation" },
            // { href: "/blog", text: "Blog" },
            { href: "/privacy", text: "Privacy" },
            { href: "/help-center", text: "Help Center" },
          ].map((item, index) => (
            <motion.li
              key={item.href}
              className="bg-dark-gray px-6 py-3 rounded-full"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Link href={item.href}>{item.text}</Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          className="flex justify-between items-center gap-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 120,
          }}
        >
          {[
            { href: "https://x.com/Fortichain3", icon: <X />, delay: 0.5 },
            {
              href: "https://t.me/+G5oIk9_ogMxkNmE0",
              icon: <Telegram />,
              delay: 0.6,
            },
            {
              href: "https://github.com/skill-mind/Fortichain-web-app",
              icon: <GithubIcon />,
              delay: 0.7,
            },
          ].map((social, index) => (
            <motion.li
              key={social.href}
              className="bg-dark-gray p-3 rounded-full"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: social.delay,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.2, rotate: 10, y: -3 }}
            >
              <Link href={social.href} target="_blank">
                {social.icon}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.div>
  );
}
