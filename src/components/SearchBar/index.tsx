import searchBar from "./SearchBar.module.css"
import { useState } from "react";
import { IconClose } from "@/modules/app.modules";
import useSearch from "@/hooks/useSearch";

interface SearchBarProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ onChange }: SearchBarProps) {
    const { search, setSearch } = useSearch();

    const [icon, setIcon] = useState(false);

    function handleIconClose() {
        setIcon(true);
    }

    function clearSearch() {
        setSearch("");
    }

    /*  value={search}  placeholder={placeholder} */
    return (
        <div onClick={handleIconClose} className={searchBar.container}>
            <input
                className={searchBar.input}
                value={search}
                placeholder="Pesquisar..."
                onChange={onChange}
                type="text"
            />
            {icon && search !== "" ? (
                <IconClose
                    size={20}
                    cursor={"pointer"}
                    onClick={clearSearch}
                />
            ) : (
                null
            )}
        </div>
    );
}
