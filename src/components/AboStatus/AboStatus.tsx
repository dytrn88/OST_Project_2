import { FC } from "react";
import { BsCheck, BsPersonFillX } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { FaPersonWalking } from "react-icons/fa6";

interface AboStatusProps {
  variant: "valid" | "invalid" | "almost" | "visitor" | "pending";
}

const statusConfig = {
  valid: {
    color: "green",
    icon: <BsCheck />,
  },
  invalid: {
    color: "red",
    icon: <BsPersonFillX />,
  },
  almost: {
    color: "orange",
    icon: <CgSandClock />,
  },
  visitor: {
    color: "blue",
    icon: <FaPersonWalking />,
  },
  pending: {
    color: "gray",
    icon: <BsCheck />,
  },
};

const AboStatus: FC<AboStatusProps> = ({ variant }) => {
  return (
    <div
      style={{
        color: statusConfig[variant].color,
        borderRadius: 10,
        fontSize: 20,
      }}
    >
      {statusConfig[variant].icon}
    </div>
  );
};

export { AboStatus };
