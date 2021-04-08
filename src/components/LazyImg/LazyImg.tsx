import { ImgHTMLAttributes, useState } from "react";
import { Img } from "components/Img";
import {
  AnimatedWrapper,
  Props as AnimatedWrapperProps,
} from "components/AnimatedWrapper";
import { useInView } from "react-intersection-observer";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackUrl?: string;
  animationProps?: Omit<AnimatedWrapperProps, "children">;
};

export const LazyImg: React.FC<Props> = ({ src, animationProps, ...rest }) => {
  const [showImage, setShowImage] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <AnimatedWrapper
      extRef={ref}
      triggerAnimation={inView && showImage}
      {...animationProps}
    >
      <Img
        {...rest}
        src={inView ? src : ""}
        onImageLoaded={() => setTimeout(() => setShowImage(true), 0)}
      />
    </AnimatedWrapper>
  );
};
