import type { FC, FormEventHandler, MouseEventHandler } from "react";
import { useState } from "react";

import { useDispatch } from "../../../../Context/Context";
import { setCity, setType } from "../../../../Context/ListingState/actions";
import { BREWERY_TYPES, CITIES } from "../../Constants";
import {
    Button,
    FieldGroup,
    Form,
    FormField,
    Select,
} from "./Styled.Components";

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
        <Form onSubmit={handleSubmit}>
            <FieldGroup>
                <FormField>
                    <Select
                        value={city}
                        onChange={(e) => setCityState(e.target.value)}
                    >
                        {CITIES.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </Select>
                </FormField>

                <FormField>
                    <Select
                        value={type}
                        onChange={(e) => setTypeState(e.target.value)}
                    >
                        {BREWERY_TYPES.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </Select>
                </FormField>
            </FieldGroup>

            <FieldGroup>
                <Button type="submit">Apply</Button>
                <Button type="reset" onClick={handleReset}>
                    Reset
                </Button>
            </FieldGroup>
        </Form>
    );
};

export default FilterBar;
