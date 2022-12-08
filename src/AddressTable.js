import React, { useState } from "react";

const AddressTable = ({ data }) => {
    const [filtered, setFiltered] = useState(data);
    const [selected, setSelected] = useState("");
    const [isAsc, setIsAsc] = useState(true);

    const filterData = (value) => {
        if (value !== undefined) {
            const filteredData = data.filter((address) =>
                Object.values(address)
                    .join()
                    .toLowerCase()
                    .includes(value.toLowerCase())
            );
            setFiltered(filteredData);
        }
    };

    const compare = (a, b) => {
        if (a[selected] < b[selected]) {
            return isAsc ? -1 : 1;
        }
        if (a[selected] > b[selected]) {
            return isAsc ? 1 : -1;
        }
        return 0;
    };

    const selectOrder = (key) => {
        setIsAsc((x) => !x);
        setSelected(key);
        setFiltered(filtered.sort(compare));
    };

    return (
        <>
            <h2>Address Table</h2>
            <input
                type="text"
                placeholder="search"
                onChange={(e) => filterData(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, i) => (
                            <th key={i} onClick={() => selectOrder(key)}>
                                {key}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((address, i) => (
                        <tr key={i}>
                            {Object.values(address).map((val, y) => (
                                <td key={y}>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default AddressTable;
