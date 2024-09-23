import { useContext } from "react";
import { SearchBarContext } from "../context/SearchContext";

export default function useSearch() {
    return useContext(SearchBarContext);
}
