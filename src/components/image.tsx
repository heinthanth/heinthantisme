import { createRef, Fragment, ImgHTMLAttributes, useEffect, useState } from "react";

// prettier-ignore
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>
  { srcWebp?: string, webpLowq?: string, srcLowq?: string, pictureClass?: string }

const Image = ({ srcWebp, src, srcLowq, webpLowq, alt, pictureClass, ...rest }: ImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const image = createRef<HTMLImageElement>();

  useEffect(() => {
    image.current && image.current.complete && image.current.dispatchEvent(new Event("load"));
  }, [image]);

  return (
    <picture className={pictureClass}>
      {webpLowq && isLoading ? (
        <source srcSet={webpLowq} type="image/webp" />
      ) : srcWebp ? (
        <source srcSet={srcWebp} type="image/webp" />
      ) : null}
      {srcLowq && isLoading ? (
        <Fragment>
          <source srcSet={srcLowq} type="image/png" />
          <img
            ref={image}
            className="w-full h-[auto]"
            src={srcLowq}
            alt={alt}
            {...rest}
            onLoad={() => setIsLoading(false)}
          />
        </Fragment>
      ) : (
        <Fragment>
          <source srcSet={src} type="image/png" />
          <img
            ref={image}
            className="w-full h-[auto]"
            src={src}
            alt={alt}
            {...rest}
            onLoad={() => setIsLoading(false)}
          />
        </Fragment>
      )}
    </picture>
  );
};

export default Image;
