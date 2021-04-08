import { css, SerializedStyles } from "@emotion/react";
import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type Props = {
  target?: string;
  isDisabled?: boolean;
  customStyles?: SerializedStyles;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const DefaultLink: React.FC<Props> = ({
  children,
  target = "_blank",
  isDisabled,
  ...rest
}) => {
  return (
    <a
      tabIndex={0}
      target={target}
      rel="noopener noreferrer"
      css={css`
        text-decoration: none;
        cursor: pointer;
        color: inherit;
      `}
      {...rest}
    >
      {children}
    </a>
  );
};
