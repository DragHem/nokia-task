import { ReactNode } from "react";

interface Props {
  clickHandler: () => void;
  disabled: boolean;
  children: ReactNode;
}

const Button = ({ clickHandler, disabled, children }: Props) => {
  return (
    <button onClick={clickHandler} disabled={disabled} className="btn">
      {children}
    </button>
  );
};

export default Button;
