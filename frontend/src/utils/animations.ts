import { Variants } from "framer-motion";

export const staggerContainer = (delay: number = 0.1): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: delay,
    },
  },
});

export const fadeInUp = (duration: number = 0.3, distance: number = 20): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
    },
  },
});
