"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Router } from "@/provider/route-provider";
import { useContext } from "react";
import { Quote, QuoteRight } from "@/icons/github";
import { Input } from "@/components/ui/input";
import Header from "@/components/home-header";
import ShowCase from "@/components/home-show-case";
import Metrics from "@/components/fortichain-metrics";
import Explore from "@/components/explore-fortichain";
import Footer from "@/components/footer";
import LaunchAppUi from "@/components/ui/launch-app";

export default function Page() {
  const { route } = useContext(Router);
  if (route !== "none") {
    return <LaunchAppUi />;
  }
  const date = new Date(1761487836);
  console.log(date);
  return (
    <div className="">
      <Header />
      <ShowCase />
      <Metrics />
      <motion.div
        className="xl:px-20 px-1 my-20"
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        <div className="flex sm:w-[90%] flex-col items-start gap-5 justify-center px-5 xl:min-w-6xl max-w-6xl mx-auto">
          <motion.div
            className="flex justify-between w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 150,
              }}
            >
              <Quote />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 20 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 150,
              }}
            >
              <QuoteRight />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl px-9 text-center"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            At the Starknet Foundation, we`&apos;re excited to see platforms
            like FortiChain push the boundaries of decentralized collaboration
            and security. By empowering researchers and developers to work
            together in trustless environments, FortiChain strengthens the
            integrity of the Starknet ecosystem and sets a new standard for
            vulnerability disclosure.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 justify-center mx-auto"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Image src="/dylan.svg" alt="avatar" width={60} height={60} />
            </motion.div>
            <h3 className="text-gray-text md:text-2xl text-18">
              Dylan Kugler, Starknet Foundation
            </h3>
          </motion.div>
        </div>
      </motion.div>
      <Explore />
      <motion.section
        className="my-36 px-5"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="gap-2 border p-2 border-dark-border-gray rounded-full flex max-w-[600px] mx-auto justify-between items-center text-center"
          initial={{ opacity: 0, rotateX: -20 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.03, rotateX: 2 }}
        >
          <Input
            type="text"
            placeholder="Enter email address"
            className="pl-4"
          />
          <motion.button
            className="p-[2px] w-fit min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
            type="button"
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="bg-gradient-to-r py-3 px-6 from-[#1D74F9] flex items-center justify-between to-[#092650] rounded-full h-full w-full">
              Subscribe
            </div>
          </motion.button>
        </motion.div>

        <motion.div
          className="text-gray-text text-center mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 150,
          }}
        >
          Subscribe to get updates on bounties, project launches, and security
          insights.
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
}
