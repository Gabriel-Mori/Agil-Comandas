interface InputProps {
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
  type?: string;
  className?: string;
  htmlFor?: string;
  icon?: JSX.Element;
}

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  label,
  className = "",
  htmlFor,
  icon,
}: InputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={htmlFor} className="text-primary mb-1 text-sm" >{label}</label>
      <div className="flex items-center  border-[0.5px] border-solid border-[#CFD9E0] p-3 rounded-xl">

        <input
          className="outline-none "
          type={type}
          name={htmlFor}
          id={htmlFor}
          placeholder={placeholder}
          value={value}
        // onChange={onChange}
        />
        <span className="mx-2 pl-36">{icon}</span>
      </div>
    </div>
  );
};

export default Input;
