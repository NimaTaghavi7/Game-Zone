import { Button } from "@chakra-ui/react";
import { FiRefreshCw } from "react-icons/fi";

interface Props {
  onReset: () => void;
}

const ResetFilters = ({ onReset }: Props) => {
  return (
    <Button
      size="md"
      variant="outline"
      minWidth="40px"
      paddingX={0}
      aria-label="Reset filters"
      title="Reset filters"
      onClick={onReset}
    >
      <FiRefreshCw size={17} />
    </Button>
  );
};

export default ResetFilters;