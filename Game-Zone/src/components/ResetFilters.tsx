import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FiRefreshCw } from "react-icons/fi";

interface Props {
  onReset: () => void;
}

const ResetFilters = ({ onReset }: Props) => {
  const [isRotating, setIsRotating] = useState(false);

  const handleReset = () => {
    setIsRotating(true);
    onReset();

    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <Button
      size="md"
      variant="outline"
      minWidth="40px"
      paddingX={0}
      aria-label="Reset filters"
      title="Reset filters"
      onClick={handleReset}
    >
      <span className={isRotating ? "reset-spin" : ""}>
        <FiRefreshCw size={17} />
      </span>
    </Button>
  );
};

export default ResetFilters;