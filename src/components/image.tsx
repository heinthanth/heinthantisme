import { createRef, ImgHTMLAttributes, useEffect, useState } from "react";

// prettier-ignore
interface ImageProps extends ImgHTMLAttributes<HTMLElement> { placeholder?: string }

const Image = ({ src, srcSet, placeholder, alt, ...props }: ImageProps) => {
  const [loading, setLoading] = useState(true);
  const image = createRef<HTMLImageElement>();

  useEffect(() => {
    if (image.current && image.current.complete) image.current.dispatchEvent(new Event("load"));
  }, [image]);

  if (loading && placeholder)
    return (
      <img
        ref={image}
        src={placeholder}
        srcSet={placeholder}
        alt={alt}
        {...props}
        onLoad={() => setLoading(false)}
      />
    );
  return <img ref={image} src={placeholder} srcSet={srcSet} alt={alt} {...props} />;
};

export default Image;
