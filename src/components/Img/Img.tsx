import { ImgHTMLAttributes, useRef } from "react";
import { css } from "@emotion/react";
import { useLayoutEffect, preloadImageWithCallback } from "utils";

export type Props = {
  onImageLoaded?(): void;
  fallbackUrl?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Img = ({
  src = "",
  fallbackUrl,
  onImageLoaded,
  title,
  alt,
  ...rest
}: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  function handleOnLoad() {
    if (imageRef.current?.currentSrc) {
      onImageLoaded && onImageLoaded();
    }
  }

  useLayoutEffect(() => {
    if (imageRef.current?.currentSrc) {
      preloadImageWithCallback({
        imageUrl: imageRef.current.currentSrc,
        callback: onImageLoaded,
      });
    }
  }, [onImageLoaded]);

  return (
    <>
      <img
        src={src}
        onLoad={handleOnLoad}
        ref={imageRef}
        title={title}
        alt={alt}
        decoding="async"
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
        {...rest}
      />

      {fallbackUrl && (
        <noscript>
          <img src={fallbackUrl} title={title} alt={alt} />
        </noscript>
      )}
    </>
  );
};
