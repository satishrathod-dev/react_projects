// Single selection
// Multi selection

import { useState } from "react";
import data from "./Data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    console.log(selected);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div>
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                  {selected === dataItem.id ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <div>No Data Present!</div>
          )}
        </div>
      </div>
    </div>
  );
}
