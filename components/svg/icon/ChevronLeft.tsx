import ChevronRight from "./ChevronRight";

interface ChevronLeftProps {
  onClick?: () => void;
  disabled?: boolean;
  size?: number;
  color?: string;
  className?: string;
}

const ChevronLeft: React.FC<ChevronLeftProps> = ({
  onClick,
  disabled = false,
  size,
  color,
  className,
}) => {
  return (
    <div
      className="w-min"
      style={{
        transform: "scaleX(-1)",
      }}
    >
      <ChevronRight
        size={size}
        color={color}
        className={className}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  );
};

export default ChevronLeft;
