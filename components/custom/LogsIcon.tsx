import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface LogsIconProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const LogsIcon: React.FC<LogsIconProps> = ({ onClick, size = 32 }) => (
  <motion.svg
    onClick={onClick}
    className="select-none cursor-pointer"
    whileTap={{ scale: 0.8 }}
    width={size}
    viewBox="0 0 32 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 3.78947C1.5 2.52504 2.52504 1.5 3.78947 1.5H22.1053C23.3697 1.5 24.3947 2.52504 24.3947 3.78947V32.0263H3.78947C2.52504 32.0263 1.5 31.0013 1.5 29.7368V3.78947Z"
      stroke="white"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.3947 16.7632C24.3947 15.9202 25.078 15.2368 25.921 15.2368H28.9737C29.8166 15.2368 30.5 15.9202 30.5 16.7632V29.7368C30.5 31.0013 29.475 32.0263 28.2105 32.0263H24.3947V16.7632Z"
      stroke="white"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M6.07892 7.60526H12.1842"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.07892 12.9474H15.2368"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default LogsIcon;
