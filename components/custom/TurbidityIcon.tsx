import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface TurbidityIconProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const TurbidityIcon: React.FC<TurbidityIconProps> = ({
  onClick,
  size = 30,
}) => (
  <motion.svg
    onClick={onClick}
    className="select-none"
    width={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 7C4.17043 7 4.17043 8 6.32957 8C8.4887 8 8.5 7 10.6591 7C12.8183 7 12.8296 8 14.9887 8C17.1478 8 17.1591 7 19.3183 7C21.4774 7 21.4887 8 23.6591 8C25.8296 8 25.8296 7 28 7"
      stroke="#004382"
      strokeMiterlimit="10"
    />
    <path
      d="M2 14C4.17043 14 4.17043 15 6.32957 15C8.4887 15 8.5 14 10.6591 14C12.8183 14 12.8296 15 14.9887 15C17.1478 15 17.1591 14 19.3183 14C21.4774 14 21.4887 15 23.6591 15C25.8296 15 25.8296 14 28 14"
      stroke="#004382"
      strokeMiterlimit="10"
    />
    <path
      d="M2 21C4.17043 21 4.17043 23 6.32957 23C8.4887 23 8.5 21 10.6591 21C12.8183 21 12.8296 23 14.9887 23C17.1478 23 17.1591 21 19.3183 21C21.4774 21 21.4887 23 23.6591 23C25.8296 23 25.8296 21 28 21"
      stroke="#004382"
      strokeMiterlimit="10"
    />
  </motion.svg>
);

export default TurbidityIcon;
