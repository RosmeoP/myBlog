'use client'
import TrueFocus from './TrueFocus';
import './verticalText.css'
import ShinyText from './ShinyText';

  

const View = () => {
  return (
    <div className='bg-black w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden gap-10'>
      <TrueFocus 
        sentence="WELCOME TO ROSMEO'S PERSONAL BLOG"
        manualMode={false}
        blurAmount={4}
        borderColor="white"
        animationDuration={1.5}
        pauseBetweenAnimations={1}
      />

    <ShinyText text="Click see to read my blog!" disabled={false} speed={3} className='custom-class' />
    

    </div>
  )
}

export default View;
