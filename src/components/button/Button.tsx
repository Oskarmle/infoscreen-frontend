import styles from "./button.module.css";

type ButtonProps = {
  buttonText: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type: "button" | "submit" | "reset";
};

export default function Button({
  buttonText,
  onClick,
  variant,
  type,
}: ButtonProps) {
  const buttonClass = styles[variant || "primary"];
  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      <p>{buttonText}</p>
    </button>
  );
}
