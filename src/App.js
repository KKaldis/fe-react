import React, { useEffect, useState } from "react";
import "./styles.css";
import AddressTable from "./AddressTable";
import Instructions from "./Instructions";

export default function App() {
  const [showInstructions, setShowInstrunctions] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      try {
        const result = await fetch(url);
        const userData = await result.json();
        const addressData = userData.reduce((acc, curr) => {
          var { address } = curr;
          const { geo } = address;
          delete address.geo;

          return [...acc, { ...address, ...geo }];
        }, []);
        console.log(addressData);

        setData(addressData);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <div className="row">
        <button onClick={() => setShowInstrunctions(!showInstructions)}>
          Toggle Instructions
        </button>
      </div>
      {showInstructions ? <Instructions /> : <AddressTable data={data} />}
    </div>
  );
}
