import { css } from "@emotion/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedWrapper } from "src/components/AnimatedWrapper";

type Props = {
  title: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: React.ReactNode;
};

export function WorkExperienceCard({
  title,
  logo,
  startDate,
  endDate,
  description,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const Icon = logo;

  return (
    <div
      css={css`
        background-color: #f0f4f8;
        border-radius: 8px;
        padding: 1.6rem;
        border: 1px solid #b3ecff;

        a {
          display: block;
          text-decoration: underline;
          color: #035388;

          :first-of-type {
            margin-top: 0.8rem;
          }
          :last-of-type {
            margin-bottom: 0.8rem;
          }
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: flex-start;

          @media all and (max-width: 480px) {
            flex-direction: column;
          }
        `}
      >
        <AnimatedWrapper
          extRef={ref}
          triggerAnimation={inView}
          delay={120}
          css={css`
            flex-shrink: 0;
            margin-right: 1.6rem;

            @media all and (max-width: 480px) {
              margin: 0;
              margin-bottom: 1.6rem;
            }
          `}
        >
          <Icon
            css={css`
              width: 48px;
              height: 48px;
            `}
          />
        </AnimatedWrapper>
        <div
          css={css`
            display: grid;
          `}
        >
          <span
            css={css`
              font-weight: 600;
              font-size: 1.8rem;
            `}
          >
            {title}
          </span>
          <div
            css={css`
              font-size: 1.4rem;
              color: #486581;
            `}
          >
            {startDate} - {endDate}
          </div>
          <div
            css={css`
              margin-top: 1.6rem;
            `}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
