import { Button as ButtonComponent } from "./Button.styles";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <ButtonComponent>{props.label}</ButtonComponent>;
};

export default Button;
