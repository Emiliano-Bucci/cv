import { css } from "@emotion/react";

type Props = {
  items: string[];
};

export function ItemsList({ items }: Props) {
  return (
    <ul
      css={css`
        margin-top: 0.8rem;
        list-style: initial;
        padding-left: 2rem;
      `}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
