import { DUMMY_LINKS } from "@/data/links"
import { Card, CardContent } from "@/components/ui/card"
import { InstagramLogo, YoutubeLogo, Book, GithubLogo, Briefcase } from "@phosphor-icons/react/dist/ssr"

const IconMap: Record<string, React.ReactNode> = {
  instagram: <InstagramLogo weight="fill" className="w-6 h-6" />,
  youtube: <YoutubeLogo weight="fill" className="w-6 h-6" />,
  book: <Book weight="fill" className="w-6 h-6" />,
  github: <GithubLogo weight="fill" className="w-6 h-6" />,
  briefcase: <Briefcase weight="fill" className="w-6 h-6" />,
}

interface PageProps {
  params: Promise<{ nickname: string }>
}

export default async function Page({ params }: PageProps) {
  const { nickname } = await params
  const activeLinks = DUMMY_LINKS.filter(link => link.isActive)

  // URL 디코딩 처리 (한글 닉네임 등 대비)
  const decodedNickname = decodeURIComponent(nickname)

  return (
    <div className="relative min-h-svh flex flex-col items-center p-6 sm:p-12 overflow-hidden bg-slate-50 dark:bg-slate-950 selection:bg-indigo-200 selection:text-indigo-900">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-slate-50 to-slate-50 dark:from-indigo-900/20 dark:via-slate-950 dark:to-slate-950"></div>
        {/* Decorative Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 dark:bg-purple-800/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-800/10 blur-[120px]"></div>
      </div>

      <div className="w-full max-w-xl flex flex-col gap-12 py-8 sm:py-12 z-10">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="relative group cursor-pointer">
            {/* Animated Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-full border-4 border-white dark:border-slate-950 overflow-hidden bg-white">
                <img 
                  src="/profile.png" 
                  alt="Profile Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-3 max-w-sm">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 tracking-tight">
              정지훈
            </h1>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              @{decodedNickname}
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              안녕하세요! 저의 모든 링크를 한 곳에서 확인하세요 👋
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-5 w-full">
          {activeLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full focus:outline-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="relative overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-white/10 hover:border-indigo-300/50 dark:hover:border-indigo-500/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-indigo-900/20 group-hover:bg-white/60 dark:group-hover:bg-slate-800/60 rounded-2xl animate-in fade-in slide-in-from-bottom-6">
                <div className="absolute inset-0 w-[200%] translate-x-[-100%] group-hover:translate-x-[50%] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
                <CardContent className="flex items-center p-5 sm:p-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-sm text-slate-600 dark:text-slate-400 group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
                    {IconMap[link.icon] || <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full" />}
                  </div>
                  <div className="flex-grow text-center font-bold text-slate-700 dark:text-slate-200 text-[1.05rem] sm:text-lg tracking-wide group-hover:text-indigo-950 dark:group-hover:text-white transition-colors duration-300 pr-12">
                    {link.title}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  )
}
