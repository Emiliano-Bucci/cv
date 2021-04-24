import { css } from "@emotion/react";

type Props = {
  title: string;
  content: React.ReactNode;
};

export function ContactInfo({ title, content }: Props) {
  return (
    <div
      css={css`
        display: grid;
      `}
    >
      <span
        css={css`
          font-size: 1.4rem;
          font-weight: 600;
          color: #102a43;
        `}
      >
        {title}
      </span>
      <span
        css={css`
          color: #035388;
        `}
      >
        {content}
      </span>
    </div>
  );
}
