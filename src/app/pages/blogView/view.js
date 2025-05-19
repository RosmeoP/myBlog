'use client'
import SplitText from './SplitText';
import ShinyText from './ShinyText';

const handleAnimationComplete = () => {
  // Animation complete logic here
};

const View = () => {
  return (
    <div className='bg-black text-white w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden gap-10'>
      <div className="flex flex-col items-center pb-10">
        <SplitText
          text={"Rosmeo's"}
          className="text-4xl font-semibold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <SplitText
          text={"Blog"}
          className="text-4xl font-semibold text-center"
          delay={300}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      <ShinyText text="Click see to read my blog!" disabled={false} speed={3} className='custom-class' />
    </div>
  );
};

export default View;
