import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Define onClick prop type
};

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-5 rounded-full hover:bg-slate-50 hover:text-orange-50 border-2 transform scale-100 hover:scale-110 duration-300 ease-in-out shadow-xl hover:shadow-2xl ${variant} ${
        full && "w-full"
      }`}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <p className="bold-16 whitespace-nowrap">{title}</p>
    </button>
  );
};

export default Button;
