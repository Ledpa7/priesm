import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Globe,
  ChevronRight,
  Github,
  Layers,
  Sparkles,
  ArrowUpRight,
  Fingerprint,
  Lightbulb,
  Search,
  Compass,
  Languages
} from 'lucide-react'
import { useRef, useState } from 'react'

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/merlin-multi-llm-ai-macro/benmdphopdoninfinldapifkhhppalei?authuser=0&hl=en"

const translations = {
  en: {
    nav: ['Philosophy', 'Ecosystem', 'Lab'],
    meet: 'Meet Pr!esm',
    heroBadge: 'Pr!esm Ecosystem',
    heroTitle: <>Truth found in<br /><span className="rainbow-text">Multi-Perspectives.</span></>,
    heroDesc: 'A single viewpoint of the world is never enough. Prism refracts a single thought through high-dimensional intelligence to find answers closest to the truth.',
    ctaExperience: 'Experience Pr!esm',
    ctaExplore: 'Explore Lab',
    question: 'One Question',
    perspective: 'Perspective',
    flagshipBadge: 'Flagship Service',
    flagshipTitle: 'Pr!esm Response',
    flagshipDesc: 'Rational answers begin with comparison. Trigger simultaneous responses from multiple LLMs with one question to capture optimal insights.',
    feat1Title: 'Multi-LLM Parallel',
    feat1Desc: "Run the world's most capable intelligences—Grok, Gemini, GPT—simultaneously on a single screen.",
    feat2Title: 'Persona Engine',
    feat2Desc: 'A high-density prompt system that implants the thinking patterns of experts from every field.',
    feat3Title: 'Local Intelligence',
    feat3Desc: 'Processes data using Chrome\'s built-in local AI for absolute privacy and lightning-fast speed.',
    roadmapBadge: 'Future Roadmap',
    roadmapTitle: 'Expanding the Spectrum',
    roadmapDesc: 'Prism goes beyond multi-answers to redefine every touchpoint where AI meets daily life and business.',
    searchTitle: 'Pr!esm Search',
    searchDesc: 'Developing an intelligent search environment with integrated AI interpretations. The first experimental model will be released soon.',
    searchStatus: 'Development Phase',
    studioTitle: 'Pr!esm Studio',
    studioDesc: 'Planning a creation-centric service to design and automate complex workflows with AI. Magnify your vision.',
    philosophy: '"Truth doesn\'t exist as a single point, but at the intersection of many perspectives."',
    philosophyBadge: 'Pr!esm Manifest',
    footerTitle: <>Start with Pr!esm.</>,
    footerCTA: 'Deploy Free Extension',
    footerMeta1: 'v2.7.1 PROD',
    footerMeta2: 'PR!ESM UNIVERSE READY',
    footerCopyright: 'Pr!esm Strategic Environment // © 2026 Jidu Labs',
    footerLinks: ['Philosophy', 'Artifacts']
  },
  ko: {
    nav: ['철학', '에코시스템', '연구소'],
    meet: 'Pr!esm 만나기',
    heroBadge: 'Pr!esm 에코시스템',
    heroTitle: <>다차원의 시선에서<br /><span className="rainbow-text">찾는 진실.</span></>,
    heroDesc: '세상을 보는 단 하나의 시선은 충분하지 않습니다. 프리즘은 하나의 질문을 다차원의 지능으로 굴절시켜 진실에 가장 가까운 해답을 찾아냅니다.',
    ctaExperience: 'Pr!esm 체험하기',
    ctaExplore: '연구소 탐색',
    question: '하나의 질문',
    perspective: '관점',
    flagshipBadge: '대표 서비스',
    flagshipTitle: 'Pr!esm Response',
    flagshipDesc: '가장 합리적인 해답은 비교로부터 시작됩니다. 하나의 질문으로 여러 LLM의 응답을 동시에 이끌어내어 최적의 인사이트를 포착하세요.',
    feat1Title: '멀티 LLM 병렬 처리',
    feat1Desc: 'Grok, Gemini, GPT 등 현존하는 최고의 지능들을 한 화면에서 동시에 구동합니다.',
    feat2Title: '페르소나 엔진',
    feat2Desc: '각 분야 전문가의 사고 방식을 이식한 고밀도 프롬프트 시스템을 제공합니다.',
    feat3Title: '로컬 인텔리전스',
    feat3Desc: '개인정보 보호를 위해 크롬 내장 로컬 AI를 활용하여 데이터를 처리합니다.',
    roadmapBadge: '미래 로드맵',
    roadmapTitle: '스펙트럼의 확장',
    roadmapDesc: '프리즘은 멀티 답변을 넘어, AI가 일상과 비즈니스에 스며드는 모든 접점을 새롭게 정의합니다.',
    searchTitle: 'Pr!esm Search',
    searchDesc: 'AI의 해석이 곁들여진 지능형 검색 환경을 구축하고 있습니다. 조만간 첫 번째 실험 모델이 공개됩니다.',
    searchStatus: '개발 단계',
    studioTitle: 'Pr!esm Studio',
    studioDesc: '복잡한 워크플로우를 AI와 함께 설계하고 자동화하는 창작 중심의 서비스를 기획하고 있습니다.',
    philosophy: '"진실은 하나의 점이 아니라, 여러 시선이 교차하는 지점에 존재합니다."',
    philosophyBadge: 'Pr!esm 선언문',
    footerTitle: <>Pr!esm과 시작하세요.</>,
    footerCTA: '무료 확장프로그램 설치',
    footerMeta1: 'v2.7.1 상용 버전',
    footerMeta2: 'PR!ESM 유니버스 준비 완료',
    footerCopyright: 'Pr!esm 전략 환경 // © 2026 Jidu Labs',
    footerLinks: ['철학', '아티팩트']
  },
  zh: {
    nav: ['哲学', '生态系统', '实验室'],
    meet: '遇见 Pr!esm',
    heroBadge: 'Pr!esm 生态系统',
    heroTitle: <>在多维视角中<br /><span className="rainbow-text">发现真理。</span></>,
    heroDesc: '观察世界的单一观点远远不够。Prism 通过高维智能折射单一想法，寻找最接近真理的答案。',
    ctaExperience: '体验 Pr!esm',
    ctaExplore: '探索实验室',
    question: '一个问题',
    perspective: '视角',
    flagshipBadge: '旗舰服务',
    flagshipTitle: 'Pr!esm Response',
    flagshipDesc: '理性的答案始于对比。通过一个问题触发多个大模型的同步响应，捕捉最佳洞察。',
    feat1Title: '多模型并行',
    feat1Desc: "在单个屏幕上同时运行世界上最强大的智能——Grok, Gemini, GPT。",
    feat2Title: '人格引擎',
    feat2Desc: '高密度提示系统，植入各领域专家的思维模式。',
    feat3Title: '本地智能',
    feat3Desc: '使用 Chrome 内置本地 AI 处理数据，确保绝对隐私和闪电般的速度。',
    roadmapBadge: '未来路线图',
    roadmapTitle: '扩展光谱',
    roadmapDesc: 'Prism 不仅仅是多重回答，它正在重新定义 AI 与日常生活及业务接触的每一个点。',
    searchTitle: 'Pr!esm Search',
    searchDesc: '正在开发集成 AI 解释的智能搜索环境。第一个实验模型即将发布。',
    searchStatus: '开发阶段',
    studioTitle: 'Pr!esm Studio',
    studioDesc: '规划一个以创作为中心的服务，通过 AI 设计并自动化复杂工作流。',
    philosophy: '"真理并非以单点存在，而是在多种视角的交汇处。"',
    philosophyBadge: 'Pr!esm 宣言',
    footerTitle: <>从 Pr!esm 开始。</>,
    footerCTA: '部署免费扩展',
    footerMeta1: 'v2.7.1 正式版',
    footerMeta2: 'PR!ESM 宇宙就绪',
    footerCopyright: 'Pr!esm 战略环境 // © 2026 Jidu Labs',
    footerLinks: ['哲学', '资产']
  }
}

const Navbar = ({ lang, setLang }: { lang: keyof typeof translations, setLang: (l: keyof typeof translations) => void }) => {
  const [showLang, setShowLang] = useState(false)
  const t = translations[lang]

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex justify-between items-center backdrop-blur-xl border-b border-white/5 bg-black/20">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-black" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter leading-none rainbow-text">Pr!esm</span>
          <span className="text-[7px] font-bold tracking-[0.4em] uppercase opacity-40 ml-0.5">Universe</span>
        </div>
      </div>

      <div className="hidden md:flex gap-10 items-center">
        {t.nav.map((item, idx) => (
          <a
            key={item}
            href={`#${['philosophy', 'ecosystem', 'lab'][idx]}`}
            className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}

        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setShowLang(!showLang)}
            className="px-4 py-2.5 rounded-full glass-button-secondary text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2"
          >
            <Languages className="w-3 h-3" />
            {lang}
          </button>
          <AnimatePresence>
            {showLang && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-12 right-0 glass-card p-2 min-w-[100px] border-white/10"
              >
                {(['en', 'ko', 'zh'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l)
                      setShowLang(false)
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors ${lang === l ? 'bg-prism-accent/20 text-white' : 'hover:bg-white/5 text-gray-500 hover:text-white'}`}
                  >
                    {l === 'en' ? 'English' : l === 'ko' ? '한국어' : '中文'}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a
          href={CHROME_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full glass-button-primary text-[9px] font-black uppercase tracking-[0.2em]"
        >
          {t.meet}
        </a>
      </div>
    </nav>
  )
}

const SectionHeader = ({ badge, title, desc, align = 'center' }: any) => (
  <div className={`mb-16 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-prism-accent">{badge}</span>
    </div>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 hero-gradient-text">{title}</h2>
    <p className="max-w-2xl text-gray-500 text-base md:text-lg font-medium leading-relaxed">{desc}</p>
  </div>
)

const EcosystemCard = ({ icon: Icon, title, desc, status = 'Stable' }: any) => (
  <div className="glass-card p-8 group relative flex flex-col justify-between min-h-[280px]">
    <div>
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-prism-accent group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="mt-6 flex items-center justify-between">
      <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded ${status.includes('Stable') || status.includes('Enhanced') ? 'bg-green-500/10 text-green-500' : 'bg-prism-accent/10 text-prism-accent'}`}>
        {status}
      </span>
      <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>
  </div>
)

const App = () => {
  const containerRef = useRef(null)
  const [lang, setLang] = useState<keyof typeof translations>('en')
  const t = translations[lang]

  return (
    <div ref={containerRef} className="relative select-none text-sm md:text-base">
      <div className="mesh-bg" />
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section id="philosophy" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10"
        >
          <div className="mb-8 inline-block">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">{t.heroBadge}</span>
          </div>

          <h1 className="text-5xl md:text-[90px] font-black tracking-tighter leading-[1] mb-10 hero-gradient-text">
            {t.heroTitle}
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium mb-12 leading-relaxed">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full glass-button-primary text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3"
            >
              {t.ctaExperience} <ChevronRight className="w-5 h-5" />
            </a>
            <button className="px-10 py-4 rounded-full glass-button-secondary text-sm font-black uppercase tracking-[0.2em]">
              {t.ctaExplore}
            </button>
          </div>
        </motion.div>

        {/* Core Philosophy Visual */}
        <div className="mt-32 w-full max-w-4xl relative">
          <div className="prism-refraction-line absolute top-1/2 left-0 w-full opacity-20" />
          <div className="relative glass-card border-none bg-transparent shadow-none py-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 opacity-60">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center"><Search className="w-6 h-6" /></div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">{t.question}</span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 border border-white/20 flex items-center justify-center relative"
            >
              <div className="absolute inset-2 border border-white/10 rotate-45" />
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <div className="flex flex-col items-center gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-prism-accent" />
                  <div className="h-[1px] w-12 bg-gradient-to-r from-prism-accent to-transparent" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">{t.perspective} 0{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Flagship Section */}
      <section id="ecosystem" className="py-32 px-6 max-w-7xl mx-auto">
        <SectionHeader
          badge={t.flagshipBadge}
          title={t.flagshipTitle}
          desc={t.flagshipDesc}
        />

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <EcosystemCard
            icon={Layers}
            title={t.feat1Title}
            desc={t.feat1Desc}
            status="Stable"
          />
          <EcosystemCard
            icon={Cpu}
            title={t.feat2Title}
            desc={t.feat2Desc}
            status="Enhanced"
          />
          <EcosystemCard
            icon={Fingerprint}
            title={t.feat3Title}
            desc={t.feat3Desc}
            status="Stable"
          />
        </div>

        <SectionHeader
          badge={t.roadmapBadge}
          title={t.roadmapTitle}
          desc={t.roadmapDesc}
        />

        <div className="grid md:grid-cols-2 gap-8" id="lab">
          <div className="glass-card p-10 border-prism-accent/20 bg-prism-accent/5">
            <Compass className="w-10 h-10 text-prism-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">{t.searchTitle}</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">{t.searchDesc}</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-prism-accent">
              <span className="animate-pulse">●</span> {t.searchStatus}
            </div>
          </div>
          <div className="glass-card p-10 opacity-70">
            <Lightbulb className="w-10 h-10 text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">{t.studioTitle}</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">{t.studioDesc}</p>
            <span className="text-[10px] font-black uppercase text-gray-600">Coming soon</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 leading-snug">{t.philosophy}</h3>
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-prism-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500">{t.philosophyBadge}</span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 hero-gradient-text px-4">
            {t.footerTitle}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full glass-button-primary text-sm font-black uppercase tracking-[0.2em]"
            >
              {t.footerCTA}
            </a>
            <div className="text-left font-mono text-[9px] uppercase tracking-widest text-gray-600">
              <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-green-500" /> {t.footerMeta1}</div>
              <div className="flex items-center gap-2 mt-1"><div className="w-1 h-1 rounded-full bg-white/20" /> {t.footerMeta2}</div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-700">
          <div className="flex items-center gap-6">
            <Github className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <Globe className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
          </div>
          <span>{t.footerCopyright}</span>
          <div className="flex gap-8">
            {t.footerLinks.map(link => (
              <span key={link} className="cursor-pointer hover:text-white">{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
