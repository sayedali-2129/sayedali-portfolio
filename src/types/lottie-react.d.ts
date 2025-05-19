declare module "lottie-react" {
  import { ComponentType } from "react";

  interface LottieProps {
    animationData: any;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onComplete?: () => void;
    onLoopComplete?: () => void;
    onEnterFrame?: () => void;
    onSegmentStart?: () => void;
    onDestroy?: () => void;
    onError?: () => void;
    onDOMLoaded?: () => void;
    lottieRef?: (ref: any) => void;
    rendererSettings?: {
      preserveAspectRatio?: string;
      clearCanvas?: boolean;
      progressiveLoad?: boolean;
      hideOnTransparent?: boolean;
    };
  }

  const Lottie: ComponentType<LottieProps>;
  export default Lottie;
}
