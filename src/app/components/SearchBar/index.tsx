import "./styles.css";
import { useState } from "react";
import { AppIcon_CircleClose } from "@/app/modules/app.modules";
import useSearch from "@/app/hooks/useSearch";

interface SearchBarProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ onChange }: SearchBarProps) {
    const { search, setSearch } = useSearch();

    const [icon, setIcon] = useState(false);

    function handleIconClose() {
        /* setSearch(""); */
        setIcon(true);
    }

    function clearSearch() {
        setSearch("");
    }

    /*  value={search}  placeholder={placeholder} */
    return (
        <div onClick={handleIconClose} className="search-bar-container">
            <input
                className="container__input"
                value={search}
                placeholder="Pesquisar..."
                onChange={onChange}
                type="text"
            />
            {icon && search !== "" ? (
                <AppIcon_CircleClose
                    size={20}
                    cursor={"pointer"}
                    onClick={clearSearch}
                />
            ) : (
                ""
            )}
        </div>
    );
}
