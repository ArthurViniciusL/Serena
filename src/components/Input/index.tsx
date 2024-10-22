import input from "./Input.module.css";

type inputTypes =
    | "name"
    | "description"
    | "phone"
    | "email"
    | "cpf/cnpj"
    | "password"
    | "date"
    | "search";

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    value?: string;
    type: inputTypes;
}

export function Input({ onChange, placeholder, label, value, type }: InputProps) {
    return (
        <div className={input.container}>
            <h3 className="font-semibold">{label}</h3>
            <input
                className={input.content}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                type={type}
            />
            <span className={input.highlightLine}></span>
        </div>
    );
}
