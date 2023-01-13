import React from "react";

export const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height:"10vh"
      }}
    >
      <p
        style={{
          width: "225px",
          height: "18px",
          fontFamily: "Ubuntu",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "18px",
        }}
      >
        Made with ♥️ by Nest Academy
      </p>
      <p
        style={{
          width: "131px",
          height: "18px",
          fontFamily: "Ubuntu",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "18px",
          textAlign: "center",
        }}
      >
        ©boginoo.io 2020
      </p>
    </div>
  );
};
