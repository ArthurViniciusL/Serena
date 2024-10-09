import input from "./Input.module.css";

type inputTypes =
    | "name"
    | "phone"
    | "email"
    | "cpf/cnpj"
    | "password"
    | "date"
    | "search";

interface InputProps {
    type: inputTypes;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type, placeholder, onChange }: InputProps) {
    return (
        <div className={input.container}>
            <input
                className={input.content}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
            />
            <span className={input.highlightLine}></span>
        </div>
    );
}
