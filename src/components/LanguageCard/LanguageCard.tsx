import { css } from "@emotion/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedWrapper } from "../AnimatedWrapper/AnimatedWrapper";

type Props = {
  icon: JSX.Element;
  title: string;
};

export function LanguageCard({ title, icon }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <AnimatedWrapper
      triggerAnimation={inView}
      delay={120}
      extRef={ref}
      css={css`
        display: grid;
        grid-gap: 0.8rem;
        background-color: #f0f4f8;
        border-radius: 8px;
        padding: 1.6rem;
        border: 1px solid #b3ecff;

        svg {
          width: 40px;
          height: 40px;
        }
      `}
    >
      <div>{icon}</div>
      <span
        css={css`
          font-size: 1.4rem;
          color: #486581;
        `}
      >
        {title}
      </span>
    </AnimatedWrapper>
  );
}
