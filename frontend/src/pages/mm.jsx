import React from "react";

export const List = ({ text }) => {
  return (
    <div>
      <p style={{ color: "grey", fontSize: "1.2vh" }}>Өгөгдсөн холбоос:</p>
      <p>{text}</p>
      <p style={{ color: "grey", fontSize: "1.2vh", marginTop: "5vh" }}>
        Богино холбоос:
      </p>
      <p>{text}</p>
      <button
        style={{
          width: "192px",
          height: "44px",
          background: "#02B589",
          borderRadius: "100px",
          color: "white",
        }}
      >
        Хуулж авах
      </button>
    </div>
  );
};
