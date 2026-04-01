import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-300 font-sans selection:bg-black selection:text-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="px-6 py-4 md:px-10 border-b-4 border-black bg-white flex justify-between items-center shadow-[0_4px_0_rgba(0,0,0,1)] z-20 relative">
        <div className="text-2xl font-black tracking-tighter">JIHUN.DEV</div>
        <nav className="hidden md:flex gap-6 font-bold text-lg">
          <a href="#" className="hover:bg-sky-200 px-3 py-1 border-2 border-transparent hover:border-black rounded-md transition-colors">Home</a>
          <a href="#" className="hover:bg-sky-200 px-3 py-1 border-2 border-transparent hover:border-black rounded-md transition-colors">About</a>
          <a href="#" className="hover:bg-sky-200 px-3 py-1 border-2 border-transparent hover:border-black rounded-md transition-colors">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-12 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column - Intro */}
        <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1 items-center md:items-start text-center md:text-left">
          
          <div className="bg-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] inline-block w-fit -rotate-2 transform hover:rotate-0 transition-transform">
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">Software Engineering 💻</h2>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.1] tracking-tighter text-black mt-2">
            Welcome To<br />
            <span className="bg-white px-3 md:px-4 py-1 border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] inline-block mt-3 md:mt-4">
              My Profile
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-bold max-w-lg leading-snug bg-white p-5 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] mt-2">
            안녕하세요! 한양대학교 26학번 신입생 정지훈입니다. 열정 넘치는 새내기 개발자로서 다양한 경험을 쌓아가고 싶습니다!
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start mt-2 md:mt-4">
            <button className="px-6 py-3 md:px-8 md:py-4 bg-white border-4 border-black text-lg md:text-xl font-black uppercase shadow-[6px_6px_0_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all">
              Contact Me 👋
            </button>
            <button className="px-6 py-3 md:px-8 md:py-4 bg-slate-200 border-4 border-black text-lg md:text-xl font-black uppercase shadow-[6px_6px_0_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all">
              Resume 📄
            </button>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div className="flex justify-center items-center order-1 md:order-2 w-full mt-4 md:mt-0">
          <div className="w-full max-w-[340px] sm:max-w-md bg-white border-[6px] border-black shadow-[12px_12px_0_rgba(0,0,0,1)] md:shadow-[16px_16px_0_rgba(0,0,0,1)] p-6 md:p-10 flex flex-col items-center gap-6 relative transition-transform hover:-translate-y-2 group">
            
            {/* Hanyang Logo Image */}
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white border-4 border-black rounded-full overflow-hidden flex items-center justify-center p-4 md:p-6 relative z-10 shadow-[4px_4px_0_rgba(0,0,0,1)] group-hover:scale-105 transition-transform duration-300">
              <Image 
                unoptimized
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Hanyang_University_seal.svg/1200px-Hanyang_University_seal.svg.png" 
                alt="Hanyang University Logo" 
                width={200}
                height={200}
                className="w-full h-full object-contain" 
              />
            </div>

            {/* Profile Text inside Card */}
            <div className="text-center font-black uppercase tracking-tighter w-full bg-sky-200 border-4 border-black p-4 md:p-6 shadow-[6px_6px_0_rgba(0,0,0,1)] -mt-10 md:-mt-14 pt-14 md:pt-20 z-0 group-hover:bg-sky-100 transition-colors duration-300">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">Jung Jihun</h2>
              <p className="text-lg md:text-xl font-bold opacity-80 mt-1 md:mt-2">Class of 26</p>
            </div>
            
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 border-t-4 border-black bg-white flex justify-center text-center font-bold relative z-20 mt-8 md:mt-12">
        <p className="max-w-2xl text-sm md:text-base">
          Built with ❤️ using Next.js & Tailwind CSS. <br className="md:hidden" />
          © {new Date().getFullYear()} Jung Jihun. Hanyang University 26.
        </p>
      </footer>
    </div>
  );
}
