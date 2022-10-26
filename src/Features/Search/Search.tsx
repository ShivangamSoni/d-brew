import { useRouter } from "next/router";
import type { FC, FormEventHandler } from "react";
import { useState } from "react";

const Search: FC = () => {
    const { push } = useRouter();
    const [query, setQuery] = useState("");

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        push(`/breweries/${query}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Brewery Name"
                />
            </label>
        </form>
    );
};

export default Search;
