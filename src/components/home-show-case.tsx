"use client";
import { motion } from "framer-motion";
import { ArrowUp } from "@/icons/arrowUp";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import img from "../../public/Image1.svg";
import Link from "next/link";

export default function ShowCase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="pb-28 mt-28 border-b border-dark-border-gray xl:px-20 px-10">
      <div className="flex items-stretch border h-fit md:h-[610px] max-w-[660px] border-dark-border-gray flex-col md:flex-row mx-auto md:max-w-sit-screen rounded-l-3xl rounded-[8px] ">
        <Image
          src={img}
          alt=""
          className="h-full w-full bg-dark-gray rounded-l-3xl md:w-2/5 xl:w-fit "
        />
        <div className="p-6 sm:py-2 xl:py-6">
          <div className="pb-10 grid gap-6 border-b border-dark-border-gray">
            <h2 className="text-2xl">Tired of Broken Systems? So Were We.</h2>
            <p className="text-gray-text text-18">
              Built on Starknet for maximum security, transparency, and
              community collaboration
            </p>
            <Link
              target="_blank"
              href="https://forti-chain.gitbook.io/fortichain-docs/ "
              className="w-fit p-[2px] min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
            >
              <div className="bg-gradient-to-r pl-4 from-[#1D74F9] flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
                <span>Open Docs</span>
                <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
                  <ArrowUp />
                </span>
              </div>
            </Link>
          </div>

          <div className="text-base flex flex-col justify-between gap-2 xl:gap-8">
            <div className="flex items-center border-b border-dark-border-gray pt-8 py-3 gap-6">
              <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center">
                <CheckCircle2 className="text-blue-ball" />
              </div>
              <div className="grid text-sm gap-2">
                <h3>Secure</h3>
                <span className="text-gray-text">
                  Smart contracts protect funds in escrow until verified,
                  ensuring fair and secure transactions for all parties.
                </span>
              </div>
            </div>
            <div className="flex items-center border-b border-dark-border-gray py-3 gap-6">
              <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center">
                <CheckCircle2 className="text-blue-ball" />
              </div>
              <div className="grid text-sm gap-2">
                <h3>Transparent</h3>
                <span className="text-gray-text">
                  All reports and rewards verified on-chain, providing complete
                  transparency and immutable audit trails.
                </span>
              </div>
            </div>
            <div className="flex items-center  py-3 gap-6">
              <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center">
                <CheckCircle2 className="text-blue-ball" />
              </div>
              <div className="grid text-sm gap-2">
                <h3>Community-Driven</h3>
                <span className="text-gray-text">
                  Researchers, validators, and project owners collaborate
                  transparently in a decentralized ecosystem.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="mt-24 grid gap-8 w-[90%] xl:w-fit mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="md:p-3 md:h-[374px] flex-col md:flex-row p-6 md:pl-10 flex justify-between items-start md:items-center border border-dark-border-gray mx-auto rounded-[8px] max-w-6xl"
          initial={{ opacity: 0, x: -100, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ y: -8, scale: 1.02, rotateY: 2 }}
        >
          <div className="flex flex-col gap-3 mb-3 md:mb-0 md:max-w-2/5">
            <h2 className="text-sky-from text-18 md:text-2xl">
              For Project Owners
            </h2>
            <h3 className="md:text-3xl text-2xl">
              Launch and Manage Impact Projects with Confidence
            </h3>
            <span className="text-gray-text text-base md:text-18">
              Create verifiable campaigns, track real-time funding, and build
              trust through transparent blockchain records.
            </span>
          </div>
          <div className="bg-dark-gray md:w-1/2 w-full flex justify-end h-full items-end pl-8">
            <Image src="/image2.svg" alt="Projects" width={300} height={300} />
          </div>
        </motion.div>

        <motion.div
          className="md:p-3 md:h-[374px] flex-col md:flex-row p-6 md:pl-10 flex justify-between items-start md:items-center border border-dark-border-gray mx-auto rounded-[8px] max-w-6xl"
          initial={{ opacity: 0, x: 100, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ y: -8, scale: 1.02, rotateY: -2 }}
        >
          <div className="flex flex-col gap-3 mb-3 md:mb-0 md:max-w-2/5">
            <h2 className="text-sky-from text-18 md:text-2xl">
              For Validators
            </h2>
            <h3 className="md:text-3xl text-2xl">
              Validate Projects, Empower Communities
            </h3>
            <span className="text-gray-text text-base md:text-18">
              Review, approve, or flag Projects based on legitimacy, ensuring
              only credible causes go live on-chain.
            </span>
          </div>
          <div className="bg-dark-gray md:w-1/2 w-full flex justify-end h-full items-end pl-8">
            <Image
              src="/image3.svg"
              alt="Validation"
              width={300}
              height={300}
            />
          </div>
        </motion.div>

        <motion.div
          className="md:p-3 md:h-[374px] flex-col md:flex-row p-6 md:pl-10 flex justify-between items-start md:items-center border border-dark-border-gray mx-auto rounded-[8px] max-w-6xl"
          initial={{ opacity: 0, x: -100, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ y: -8, scale: 1.02, rotateY: 2 }}
        >
          <div className="flex flex-col gap-3 mb-3 md:mb-0 md:max-w-2/5">
            <h2 className="text-sky-from text-18 md:text-2xl">
              For Security Researchers
            </h2>
            <h3 className="md:text-3xl text-2xl">
              Strengthen the Chain, One Audit at a Time
            </h3>
            <span className="text-gray-text text-base md:text-18">
              Detect vulnerabilities, report issues, and safeguard project
              integrity to uphold the network`&apos;s security
            </span>
          </div>
          <div className="bg-dark-gray md:w-1/2 w-full flex justify-end h-full items-end pl-8">
            <Image src="/image4.svg" alt="Security" width={300} height={300} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
