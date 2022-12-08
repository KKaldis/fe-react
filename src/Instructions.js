import React from "react";

export default function Instructions() {
    return (
        <div className="App">
            <h2>Instructions</h2>
            <ol>
                <li>Get data from https://jsonplaceholder.typicode.com/users</li>
                <li>
                    From the received dataset, we only want the "address" object from each
                    user{" "}
                </li>
                <li>
                    Flatten "address" object, so no nested objects are inside. Data of
                    nested objects should appear{" "}
                </li>
                <li>Delete nested objects </li>
                <li>
                    Display transformed dataset in a table. Table headers should be the
                    keys of an address object{" "}
                </li>
                <li>
                    Table headers on click should sort data by ascending or descending
                    order{" "}
                </li>
                <li>
                    Create an input that <code>onChange</code> event will filter the table
                    data{" "}
                </li>
            </ol>
        </div>
    );
}
