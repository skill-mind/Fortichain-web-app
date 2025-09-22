"use client";
import { motion } from "framer-motion";

interface ProgressStep {
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface ProgressNavigationProps {
  steps: ProgressStep[];
}

export function ProgressNavigation({ steps }: ProgressNavigationProps) {
  return (
    <motion.nav
      className="flex justify-center max-w-fit mx-auto gap-6 list-none items-center text-base"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {steps.map((step, index) => (
        <motion.li
          key={index}
          className="grid gap-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span>{step.label}</span>
          <motion.span
            className={`${
              step.isCompleted || step.isActive
                ? "bg-blue-ball"
                : "bg-dark-gray-pop"
            } h-1.5 w-full block rounded-full`}
            animate={{
              backgroundColor:
                step.isCompleted || step.isActive ? "#3B82F6" : "#374151",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.li>
      ))}
    </motion.nav>
  );
}
