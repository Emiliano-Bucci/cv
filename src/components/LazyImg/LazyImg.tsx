import { Img, Props as ImageProps } from "components/Img";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import { css } from "@emotion/react";

export function LazyImg({ src, ...rest }: ImageProps) {
  const [styles, setStyles] = useSpring(() => ({
    opacity: 0,
  }));
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <animated.div
      style={styles}
      ref={ref}
      css={css`
        display: flex;
        will-change: opacity;
        flex: 1;
      `}
    >
      <Img
        {...rest}
        src={inView ? src : ""}
        onImageLoaded={() => setStyles({ opacity: 1 })}
      />
    </animated.div>
  );
}
