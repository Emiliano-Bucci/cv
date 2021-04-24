import { css } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import { AnimatedWrapper } from "src/components/AnimatedWrapper/AnimatedWrapper";

export const SkillCard: React.FC = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <AnimatedWrapper
      extRef={ref}
      triggerAnimation={inView}
      delay={120}
      css={css`
        display: flex;
        justify-content: center;
        background-color: #f0f4f8;
        border-radius: 8px;
        padding: 1.6rem;
        border: 1px solid #b3ecff;

        svg {
          width: 56px;
          height: 56px;
        }
      `}
    >
      {children}
    </AnimatedWrapper>
  );
};
