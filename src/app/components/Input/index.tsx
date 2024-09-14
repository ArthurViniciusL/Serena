import "./input_styles.css";

type inputTypes = "name" | "phone" | "email" | "cpf/cnpj" | "password" | "date";

interface InputProps {
    type: inputTypes;
    label: string;
}

export function Input({ type, label }: InputProps) {
    return (
        <div className="input-container">
            <input placeholder={label} className="input-field" type={type} />
            {/* <label htmlFor="input-field" className="input-label">{label}</label> */}
            <span className="input-highlight"></span>
        </div>
    );
}
