import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface ChevronRightProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  disabled?: boolean;
  size?: number;
  color?: string;
  className?: string;
}

const ChevronRight: React.FC<ChevronRightProps> = ({
  onClick,
  disabled = false,
  size = 11,
  color = "black",
  className,
}) => (
  <motion.svg
    onClick={(e) => {
      if (!disabled && onClick) {
        onClick(e);
      }
    }}
    className={twMerge(
      "cursor-pointer",
      disabled && "opacity-20 cursor-default",
      className
    )}
    whileTap={{ scale: disabled ? 1 : 0.8 }}
    width={size}
    viewBox="0 0 53 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.00208 3.30371L49.5299 49.8316L3.00208 96.3594"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default ChevronRight;
