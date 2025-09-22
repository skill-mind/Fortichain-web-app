"use client";
import { Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { Input } from "./ui/input";

interface GitHubIntegrationSectionProps {
  githubLink: string;
  passworks: string[];
  onGithubChange: (value: string) => void;
  onPassworkChange: (index: number, value: string) => void;
  onAddPasswork: () => void;
  onRemovePasswork: (index: number) => void;
  maxPassworks?: number;
}

export function GitHubIntegrationSection({
  githubLink,
  passworks,
  onGithubChange,
  onPassworkChange,
  onAddPasswork,
  onRemovePasswork,
  maxPassworks = 5,
}: GitHubIntegrationSectionProps) {
  const handleAddPasswork = () => {
    if (passworks.length >= maxPassworks) {
      toast.error(`Pass work links is ${maxPassworks} links max`);
      return;
    }
    onAddPasswork();
  };

  return (
    <motion.div
      className="bg-dark-gray w-full xl:min-w-900px p-6 grid gap-6 rounded-[8px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <motion.div
        className="flex gap-3 items-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="bg-pririty-low-bg w-fit p-2.5 rounded-full"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Github className="text-blue-ball" />
        </motion.div>
        <div className="flex flex-col items-start">
          <h3 className="text-base">GitHub Repository</h3>
          <span className="text-12 text-gray-text">
            Link to your professional GitHub profile
          </span>
        </div>
      </motion.div>

      <motion.div
        className="text-start mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="github url">GitHub Profile URL</label>
        <Input
          type="text"
          value={githubLink}
          onChange={(e) => onGithubChange(e.target.value)}
          placeholder="www.github.com/username"
          className="border-b border-dark-border-gray"
        />
      </motion.div>

      <AnimatePresence>
        {passworks.map((passwork, idx) => (
          <motion.div
            key={idx}
            className="text-start mt-4 relative"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1,
              type: "spring",
              stiffness: 300,
            }}
            layout
          >
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <label htmlFor="pass work">Pass Work</label>
                <Input
                  type="text"
                  value={passwork}
                  onChange={(e) => onPassworkChange(idx, e.target.value)}
                  placeholder="www.github.com/"
                  className="border-b border-dark-border-gray"
                />
              </div>
              {passworks.length > 1 && (
                <motion.button
                  type="button"
                  onClick={() => onRemovePasswork(idx)}
                  className="mb-2 p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-full transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <X size={16} />
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="flex justify-end items-center gap-3 flex-col-reverse xl:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-gray-text">{maxPassworks} links max</span>
        <motion.button
          disabled={passworks.length >= maxPassworks}
          onClick={handleAddPasswork}
          className={`w-full xl:w-40 min-h-11 p-0.5 group
            hover:from-sky-blue-border hover:to-sky-blue-border
            bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
            rounded-full group ${
              passworks.length >= maxPassworks ? "cursor-not-allowed" : ""
            }`}
          type="button"
          whileHover={passworks.length < maxPassworks ? { scale: 1.05 } : {}}
          whileTap={passworks.length < maxPassworks ? { scale: 0.95 } : {}}
        >
          <span
            className={`px-6 py-3 h-50
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r group-disabled:cursor-not-allowed
              flex items-center gap-2.5 p-2 justify-center cursor-pointer rounded-full w-full bg-[#1C1C1C]`}
          >
            Add Link
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
