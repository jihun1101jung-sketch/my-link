export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-black font-sans text-center">
      <main className="flex flex-col items-center gap-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-2">
          정지훈 <span className="text-2xl font-normal text-zinc-500">(Jung Jihun)</span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          안녕하세요! 한양대학교 26학번 신입생입니다!
        </p>
      </main>
    </div>
  );
}
