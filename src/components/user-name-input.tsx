"use client";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
interface UsernameInputSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export function UsernameInputSection({
  value,
  onChange,
}: UsernameInputSectionProps) {
  return (
    <motion.div
      className="border border-dark-border-gray p-6 grid gap-6 rounded-[12px]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <motion.label
        htmlFor="username"
        className="text-center text-18"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Enter Preferred Username
      </motion.label>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Input
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className="w-full rounded-full border border-dark-border-gray px-6 py-3 h-60"
        />
      </motion.div>
    </motion.div>
  );
}
