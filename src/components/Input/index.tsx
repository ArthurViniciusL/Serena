import "./input_styles.css";

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
        <div className="input-container">
            <input
                onChange={onChange}
                placeholder={placeholder}
                className="input-field"
                type={type}
            />

            <span className="input-highlight"></span>
        </div>
    );
}
