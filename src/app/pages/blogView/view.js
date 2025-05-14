'use client'
import TrueFocus from './TrueFocus';
import './verticalText.css'

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

<p className="text-white mt-10 text-xl font-sans font-black text-center">
  <span className="block opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
    Curious about my thoughts?
  </span>

  <a
    href="#notes"
    className="inline-block mt-4 relative text-white font-semibold tracking-wide transition-all duration-300 hover:text-gray-100 group"
  >
    <span className="relative z-10">Read the blog →</span>

    {/* Glow border */}
    <span
      className="absolute inset-0 border border-white rounded-md opacity-10 group-hover:opacity-30 transition duration-300 blur-sm"
    ></span>

    {/* Underline animation */}
    <span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
    ></span>
  </a>
</p>
    </div>
  )
}

export default View;
