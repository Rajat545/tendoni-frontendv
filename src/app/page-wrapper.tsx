"use client";
import { motion, AnimatePresence } from "framer-motion";
import "flowbite";
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>;
};
export default PageWrapper;
