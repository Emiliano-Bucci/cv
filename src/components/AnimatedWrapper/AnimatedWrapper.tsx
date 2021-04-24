import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { animated, useSpring } from "react-spring";

export type Props = {
  children: React.ReactNode;
  delay?: number;
  triggerAnimation?: boolean;
  extRef?: (node?: Element | null | undefined) => void;
} & HTMLAttributes<HTMLDivElement>;

export const AnimatedWrapper: React.FC<Props> = ({
  children,
  delay = 0,
  triggerAnimation = true,
  extRef,
  ...rest
}) => {
  const styles = useSpring({
    opacity: triggerAnimation ? 1 : 0,
    delay,
  });

  return (
    <animated.div
      style={styles}
      ref={extRef}
      css={css`
        display: flex;
        will-change: opacity;
        flex: 1;
      `}
      {...rest}
    >
      {children}
    </animated.div>
  );
};
