'use client'

import TrueFocus from './TrueFocus';

const View = () => {
  return (
    <div className='bg-black w-full min-h-screen flex items-center justify-center px-4 overflow-hidden'>
      <TrueFocus 
        sentence="WELCOME TO ROSMEO'S PERSONAL BLOG"
        manualMode={false}
        blurAmount={4}
        borderColor="white"
        animationDuration={1.5}
        pauseBetweenAnimations={1}
      />
    </div>
  )
}

export default View


