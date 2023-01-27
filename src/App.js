import React, { useState, useRef , useEffect } from "react";
import "./style.css";

export default function App() {

  const [highlightedRow, setHighlightedRow] = useState(null);
  const tableRef = useRef(null);

  const handleMouseOver = (index) => {
    setHighlightedRow(index);
  };

 useEffect(()=>{
   tableRef.current.focus()
 },[highlightedRow])

  const handleKeyDown = (event) => {

    if (event.key === "ArrowUp" && highlightedRow > 0) {
      setHighlightedRow(highlightedRow - 1);
    } else if (event.key === "ArrowDown" && highlightedRow < rows.length - 1) {
      setHighlightedRow(highlightedRow + 1);
    }
  };

  const rows = [
    { name: "Row 1", id: 1 },
    { name: "Row 2", id: 2 },
    { name: "Row 3", id: 3 },
    // ...
  ];

  return (
    <table ref={tableRef} onKeyDown={handleKeyDown}  id="table">
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={row.id}
            onMouseOver={() => handleMouseOver(index)}
            className={index === highlightedRow ? "highlight" : ""}
            tabIndex={0}
          >
            <td>{row.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;