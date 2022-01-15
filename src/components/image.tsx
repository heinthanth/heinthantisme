import { createRef, ImgHTMLAttributes, useCallback, useContext, useEffect, useState } from "react";

// prettier-ignore
export interface ImageProps extends
  ImgHTMLAttributes<HTMLImageElement> { placeholder?: string }

// prettier-ignore
const Image = ({ src: origin, placeholder, alt, ...rest }: ImageProps) => {
  const image = createRef<HTMLImageElement>();
  const [src, setSrc] = useState(placeholder || origin);
  useEffect(() => { image.current && image.current.complete &&
    image.current.dispatchEvent(new Event("load"))}, [image]);
  return <img ref={image} src={src} alt={alt} {...rest} onLoad={() => setSrc(src)} /> };

export default Image;
