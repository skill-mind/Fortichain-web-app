"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function useCountAnimation(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        startCount + (end - startCount) * easeOutQuart
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
}

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const vulnerabilities = useCountAnimation(1247, 2000);
  const bounties = useCountAnimation(1247, 2200);
  const projects = useCountAnimation(100, 1800);
  const researchers = useCountAnimation(321, 2400);

  useEffect(() => {
    if (isInView) {
      vulnerabilities.setIsVisible(true);
      bounties.setIsVisible(true);
      projects.setIsVisible(true);
      researchers.setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section className="py-28 border-b border-dark-border-gray text-center flex items-center flex-col gap-9 px-5">
      <motion.div
        className="flex flex-col gap-3 items-center max-w-[703px]"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="bg-dark-gray py-3 px-6 w-fit rounded-full"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 150,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Image src="/Logo.svg" alt="fortichain" width={120} height={40} />
        </motion.div>
        <p className="text-base md:text-18 text-gray-text">
          Real-time metrics showcasing the growing FortiChain ecosystem and its
          contribution to Web3 security.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        className="py-10 px-6 bg-dark-gray justify-between sm:w-4/5 xl:max-w-screen-xl flex items-center rounded-[8px] flex-col xl:flex-row"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <motion.div
          className="flex flex-col items-center w-full px-[60px] py-3 border-b xl:border-b-0 xl:border-r border-dark-border-gray"
          initial={{ opacity: 0, x: -80, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <span className="text-[38px]">
            {vulnerabilities.count.toLocaleString()}+
          </span>
          <span className="text-sm text-gray-text">
            Vulnerabilities Submitted
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center w-full px-[60px] py-3 border-b xl:border-b-0 xl:border-r border-dark-border-gray"
          initial={{ opacity: 0, x: 80, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <span className="text-[38px]">
            {bounties.count.toLocaleString()}+
          </span>
          <span className="text-sm text-gray-text">Bounties Paid Out</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center w-full px-[60px] py-3 border-b xl:border-b-0 xl:border-r border-dark-border-gray"
          initial={{ opacity: 0, x: -80, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <span className="text-[38px]">${projects.count}K+</span>
          <span className="text-sm text-gray-text">Projects Onboarded</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center w-full px-[60px] py-3 border-dark-border-gray"
          initial={{ opacity: 0, x: 80, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <span className="text-[38px]">{researchers.count}+</span>
          <span className="text-sm text-gray-text">Achieve Researchers</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-8"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: "spring",
          stiffness: 150,
        }}
      >
        <span className="text-2xl">Sponsor</span>
        <motion.div
          className="w-fit rounded-full bg-dark-gray p-3"
          initial={{ rotate: -180, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.6,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1, rotate: 10, y: -5 }}
        >
          <div className="bg-white-text rounded-full py-5 px-10">
            <Image
              src="/starknetLogo.svg"
              alt="starknet"
              width={100}
              height={40}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
