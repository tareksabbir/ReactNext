import React from "react";

const Logo: React.FC = () => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", justifyItems: "center" }}
    >
      <svg
        fill="none"
        height="20"
        viewBox="0 0 32 48"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#fff">
          <path d="m21.3314 18.6667v-10.6667h-21.33335312v10.6667z" />
          <path d="m21.3309 29.3332c-5.891 0-10.6666 4.7757-10.6666 10.6667l-10.66494994.0004v-.2753c.14659294-11.6097 9.56705994-20.9847 21.19434994-21.058l10.8043.0005v21.3333h-10.6666z" />
        </g>
      </svg>
      <span style={{ fontSize: ".94rem", color: "#fff", marginLeft: "4px" ,marginTop:"2px" }}>
        ReactNext
      </span>
    </div>
  );
};

export default Logo;
