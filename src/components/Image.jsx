import { useState } from "react";
import EmptySvg from "../assets/img/empty.svg";
export default function Image({ src, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(EmptySvg)}
    />
  );
}
