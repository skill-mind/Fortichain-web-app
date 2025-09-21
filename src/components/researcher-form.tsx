"use client";
import { motion } from "framer-motion";

interface FormNavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  isConnected: boolean;
  canContinue: boolean;
  isSubmitting: boolean;
  onBack: () => void;
  onContinue: () => void;
  onSubmit: () => void;
}

export function ResearcherFormNavigationButtons({
  currentStep,
  totalSteps,
  isConnected,
  canContinue,
  isSubmitting,
  onBack,
  onContinue,
  onSubmit,
}: FormNavigationButtonsProps) {
  const isLastStep = currentStep === totalSteps;
  const isFirstStep = currentStep === 1;

  return (
    <motion.div
      className="flex justify-center mt-7 gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.button
        className={`min-w-72 min-h-11 p-0.5 group
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group ${isFirstStep ? "hidden" : "block"}`}
        type="button"
        onClick={onBack}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span
          className={`px-6 py-3 h-60
            group-hover:from-sky-from group-hover:to-sky-to
            group-hover:bg-gradient-to-r
            flex items-center gap-2.5 p-2 justify-center cursor-pointer rounded-full w-full bg-[#1C1C1C]`}
        >
          Back
        </span>
      </motion.button>

      {!isLastStep && (
        <motion.button
          disabled={!isConnected}
          className={`min-w-72 disabled:cursor-not-allowed min-h-11 p-0.5 group
            hover:from-sky-blue-border hover:to-sky-blue-border
            bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
            rounded-full group ${
              canContinue ? "to-sky-blue-border from-sky-blue-border" : ""
            }`}
          type="button"
          onClick={onContinue}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={
            canContinue
              ? {
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }
              : {}
          }
        >
          <span
            className={`px-6 py-3 h-60 group-disabled:cursor-not-allowed
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r
              flex items-center gap-2.5 p-2 justify-center cursor-pointer rounded-full w-full ${
                canContinue
                  ? "from-sky-from to-sky-to bg-gradient-to-r"
                  : "bg-[#1C1C1C]"
              }`}
          >
            Continue
          </span>
        </motion.button>
      )}

      {isLastStep && (
        <motion.button
          className={`min-w-72 min-h-11 p-0.5 group
            hover:from-sky-blue-border hover:to-sky-blue-border
            bg-gradient-to-r group text-base
            rounded-full group to-sky-blue-border from-sky-blue-border`}
          type="submit"
          onClick={onSubmit}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
          }}
        >
          <span
            className={`px-6 py-3 h-60
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r
              flex items-center gap-2.5 p-2 justify-center cursor-pointer rounded-full w-full
              from-sky-from to-sky-to bg-gradient-to-r`}
          >
            {isSubmitting ? "submitting...." : "Proceed to dashboard"}
          </span>
        </motion.button>
      )}
    </motion.div>
  );
}
