"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.4,
    },
  }),
};

export function FadeInOnScroll({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInVariants}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  );
}
