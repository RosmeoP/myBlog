'use client'
import SplitText from './SplitText';
import ShinyText from './ShinyText';
import Aurora from './Aurora';



const View = () => {
  return (
    <div className="relative bg-black text-white w-full min-h-screen overflow-hidden">
      {/* Aurora as background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#00ffe7", "#00c3ff", "#0080ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div/>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 gap-10">
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
          />
        </div>

        <ShinyText text="Click to read my blog!" disabled={false} speed={3} className='custom-class' />
      </div>
    </div>
  );
};

export default View;
