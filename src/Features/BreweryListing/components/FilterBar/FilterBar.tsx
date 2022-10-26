import type { FC, FormEventHandler, MouseEventHandler } from "react";
import { useRef, useState } from "react";

import { useDispatch } from "../../../../Context/Context";
import { setCity, setType } from "../../../../Context/ListingState/actions";
import { BREWERY_TYPES, CITIES } from "../../Constants";

const FilterBar: FC = () => {
    const dispatch = useDispatch();
    const [city, setCityState] = useState("");
    const [type, setTypeState] = useState("");

    const setFilters = (city: string, type: string) => {
        // @ts-expect-error
        dispatch(setCity(city));
        // @ts-expect-error
        dispatch(setType(type));
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        setFilters(city, type);
    };

    const handleReset: MouseEventHandler = (e) => {
        e.preventDefault();
        setFilters("", "");
        setCityState("");
        setTypeState("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>City:</label>
                <select
                    value={city}
                    onChange={(e) => setCityState(e.target.value)}
                >
                    {CITIES.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Type:</label>
                <select
                    value={type}
                    onChange={(e) => setTypeState(e.target.value)}
                >
                    {BREWERY_TYPES.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">Apply</button>
            <button type="reset" onClick={handleReset}>
                Reset
            </button>
        </form>
    );
};

export default FilterBar;
