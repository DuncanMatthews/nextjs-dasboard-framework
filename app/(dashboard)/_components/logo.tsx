import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      src=
        "https://www.mpug.com/wp-content/uploads/2024/04/Mpug-Logo-01-1.webp"
      
      alt={"mpug logo"}
      height={30}
      width={30}
    />
  );
}
