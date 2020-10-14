import React, { useState, useEffect } from "react";
import axios from "axios";

const DataList = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      "https://api.covidindiatracker.com/state_data.json"
    );

    console.log(response.data[0]);
    setList(response.data);
  }, []);

 
  return (
    <div className="grid">
      {list.map(item => (
        <div className="card text-center">
          <h1 className="statebg">{item.state}</h1>
          <div className="card innerCard">
            <div className="badge text-dark innerCard">
              Active Cases: <b>{item.active}</b>
            </div>
            <div className="badge text-primary innerCard">
              Confirmed Cases: <b>{item.confirmed}</b>
            </div>
            <div className="badge text-success innerCard">
              Recovered Cases: <b>{item.recovered} </b>
            </div>
            <div className="badge text-danger innerCard">
              Deaths Cases: <b>{item.deaths}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// const userStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gridGap: "1rem",
// };
export default DataList;
