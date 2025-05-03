type ButtonProps = {
    onClick: () => void;
    label: string | number;
  };
  
  const Button = ({ onClick, label }: ButtonProps) => {
    return <button onClick={onClick}>{label}</button>;
  };
  
  export default Button;