import { ImgHTMLAttributes } from "react";
import { css } from "@emotion/react";

export type Props = {
  onImageLoaded?(): void;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Img: React.FC<Props> = ({
  src = "",
  onImageLoaded = () => {},
  ...rest
}) => {
  return (
    <div className="img-wrapper">
      <img
        src={src}
        onLoad={onImageLoaded}
        draggable={false}
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
        {...rest}
      />
    </div>
  );
};
