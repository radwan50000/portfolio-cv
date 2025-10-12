import Lottie from "lottie-react";
import LoadingAnimation from './assets/Loading text.json';

const Loading = () => {
  return (
    <div className="w-full min-h-dvh  flex flex-col items-center justify-center">
      <Lottie animationData={LoadingAnimation} loop autoplay className='w-4/12 max-h-[50rem]'/>
    </div>
  );
};

export default Loading;
