"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        {/* Ensures the transition animation runs on route change */}
        <div key={pathname}>
          {/* Container for the stair effect */}
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          {/* Background overlay that fades out after 1 second */}
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
