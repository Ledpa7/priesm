import React, { useRef, useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe,
  ChevronRight,
  Github,
  Instagram,
  Layers,
  Sparkles,
  Languages,
  Zap,
  Scale,
  Terminal,
  PlusSquare,
  ShieldCheck,
  Eye,
  Target,
  UserCheck,
  Maximize,
  MousePointer2,
  Monitor,
  Database
} from 'lucide-react'

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/merlin-multi-llm-ai-macro/benmdphopdoninfinldapifkhhppalei?authuser=0&hl=en"

const translations = {
  en: {
    nav: ['Philosophy', 'Features', 'Spectrum'],
    meet: 'Meet Merlin',
    heroBadge: 'The Multi-AI Orchestrator',
    heroTitle: <>One Prompt,<br /><span className="rainbow-text">Multi-AI Comparison.</span></>,
    heroDesc: <>The ultimate Multi-AI parallel intelligence workspace.<br />Wake up Gemini, ChatGPT, and Claude with a single question.<br />Stop tab-switching and compare AI answers in real-time.</>,
    ctaExperience: 'Get Free Multi-AI Extension',
    ctaExplore: 'View Roadmap',
    question: 'One Prompt',
    perspective: 'Multi-AI Response',
    flagshipBadge: 'Multi-AI Engine',
    flagshipTitle: 'Merlin Multi-AI Interface',
    flagshipDesc: 'Experience true Multi-AI efficiency. Trigger simultaneous responses from multiple AIs with one question to find the ultimate insight without repetitive typing.',
    mainFeatures: [
      { id: 'f1', title: 'Split Screen', icon: 'Layers' },
      { id: 'f2', title: 'Simultaneous Answers', icon: 'Zap' },
      { id: 'f3', title: 'Info Comparison', icon: 'Scale' },
      { id: 'f4', title: 'Fixed Prompts', icon: 'Terminal' },
      { id: 'f5', title: 'Custom Slots', icon: 'PlusSquare' }
    ],
    detailedFeatures: [
      { text: 'All conversations are protected and never sent to our servers.', icon: 'ShieldCheck' },
      { text: 'Multiple AIs respond to a single query simultaneously.', icon: 'Zap' },
      { text: 'Compare answers to prevent hallucinations and find the truth.', icon: 'Eye' },
      { text: 'Fixed prompts provide accurate and consistent information.', icon: 'Target' },
      { text: 'Use your own AI accounts and keep all your paid benefits.', icon: 'UserCheck' },
      { text: 'Full access to all features of each AI model without limits.', icon: 'Maximize' },
      { text: 'Use your configured Multi-AI slots separately whenever needed.', icon: 'MousePointer2' },
      { text: 'Hide the main chat and work exclusively in split-screen mode.', icon: 'Monitor' },
      { text: 'Add any website as a custom slot (subject to compatibility).', icon: 'PlusSquare' },
      { text: 'Log in to instantly recall and sync all your settings.', icon: 'Database' },
      { text: 'Simply drag text to translate any sentence instantly.', icon: 'Languages' }
    ],
    spectrumBadge: 'The Spectrum',
    spectrumTitle: 'Pr!esm Spectrum',
    spectrumDesc: 'One prompt creates an explosion of diverse intelligence. We redefine the boundaries of AI interaction.',
    pillar1Title: 'The Truth in Parallel',
    pillar1Desc: 'A single AI can hallucinate. Three AIs working together uncover the multi-dimensional truth.',
    pillar2Title: 'Frictionless Command',
    pillar2Desc: 'Eliminate the fatigue of tab-switching. Stay in your flow while triggering all elite models at once.',
    pillar3Title: 'Strategic Workspace',
    pillar3Desc: 'Not a toy. A high-stakes workbench designed for architects who value the precision of parallel reasoning.',
    philosophy: '"True productivity is achieved when you compare and find a better answer."',
    philosophyBadge: 'Merlin Efficiency',
    footerTitle: <>Ask Once. Get All.</>,
    footerCTA: 'Install Free Extension',
    footerMeta1: 'v2.7.1 STABLE',
    footerMeta2: 'MULTI-AI ENGINE READY',
    footerCopyright: 'Merlin Strategic Environment // © 2026 Pr!esm',
    footerLinks: ['Philosophy', 'Manifesto']
  },
  ko: {
    nav: ['철학', '핵심 기능', '스펙트럼'],
    meet: 'Merlin 설치하기',
    heroBadge: 'Multi-AI Orchestrator',
    heroTitle: <>질문은 한번,<br /><span className="rainbow-text">Multi-AI<br className="md:hidden" /> 동시 비교</span></>,
    heroDesc: <>비교를 위해 탭을 오가던 행동은 이제 끝.<br />Multi-AI 병렬 지능으로 Gemini, ChatGPT, Claude를 동시에 깨우세요.<br />한 화면에서 쏟아지는 답변 중 최고를 고르기만 하면 됩니다.</>,
    ctaExperience: '무료 Multi-AI 시작하기',
    ctaExplore: '로드맵 확인',
    question: '하나의 질문',
    perspective: '멀티AI 답변',
    flagshipBadge: '멀티AI 핵심 엔진',
    flagshipTitle: 'Merlin Multi-AI',
    flagshipDesc: '진정한 속도는 멀티AI 병렬 처리에서 나옵니다. 하나의 프롬프트로 여러 AI의 응답을 동시에 이끌어내어 최적의 인사이트를 즉시 비교하세요.',
    mainFeatures: [
      { id: 'f1', title: '화면 분할', icon: 'Layers' },
      { id: 'f2', title: '동시 답변', icon: 'Zap' },
      { id: 'f3', title: '정보 비교', icon: 'Scale' },
      { id: 'f4', title: '고정 프롬프트', icon: 'Terminal' },
      { id: 'f5', title: '사이트 추가', icon: 'PlusSquare' }
    ],
    detailedFeatures: [
      { text: '모든 대화내용은 서버를 거치지 않고 보호됩니다.', icon: 'ShieldCheck' },
      { text: '한번의 물음에 AI들이 동시답변 합니다.', icon: 'Zap' },
      { text: '대화를 비교하고 할루시네이션을 방지합니다.', icon: 'Eye' },
      { text: '고정된 프롬프트로 더 정확한 정보가 제공됩니다.', icon: 'Target' },
      { text: '본인 계정을 사용하므로 구독한 유료 계정 그대로 사용가능합니다.', icon: 'UserCheck' },
      { text: '각 AI 모델의 모든 기능을 그대로 사용할 수 있습니다.', icon: 'Maximize' },
      { text: '설정한 멀티AI들을 따로 쓸 수 있습니다.', icon: 'MousePointer2' },
      { text: '메인대화창을 가려 창 분할 모드로만 사용할 수 있습니다.', icon: 'Monitor' },
      { text: '커스텀 슬롯을 사용하여 원하는 사이트 추가가 가능합니다. *막히는 사이트 존재', icon: 'PlusSquare' },
      { text: '로그인을 하면 모든 슬롯을 기억합니다.', icon: 'Database' },
      { text: '문장을 드래그하여 번역 할 수 있습니다.', icon: 'Languages' }
    ],
    spectrumBadge: 'The Spectrum',
    spectrumTitle: 'Pr!esm Spectrum',
    spectrumDesc: '하나의 질문은 곧 지능의 폭발입니다. 우리는 AI와 상호작용하는 방식의 경계를 재정의합니다.',
    pillar1Title: '병렬적 진실',
    pillar1Desc: '하나의 AI는 환각을 말할 수 있지만, 셋이 모이면 다차원적인 진실이 명확히 드러납니다.',
    pillar2Title: '제로 스위칭 지휘',
    pillar2Desc: '탭을 오가는 피로를 완전히 제거했습니다. 모든 엘리트 모델을 한발의 사격으로 동시에 깨우세요.',
    pillar3Title: '전략가를 위한 작업대',
    pillar3Desc: '단순한 챗봇이 아닙니다. 병렬 추론의 정밀함을 아는 전략가들을 위해 설계된 고성능 아키텍처입니다.',
    philosophy: <>"진정한 생산성은 비교를 통해<br />더 나은 답을 찾을 때 완성됩니다."</>,
    philosophyBadge: '멀린 생산성 선언',
    footerTitle: <>한 번만 물어보세요.</>,
    footerCTA: '지금 바로 무료 설치',
    footerMeta1: 'v2.7.1 상용 버전',
    footerMeta2: '멀티 AI 지휘소 준비 완료',
    footerCopyright: 'Merlin 전략 환경 // © 2026 Pr!esm',
    footerLinks: ['철학', '아티팩트']
  },
  zh: {
    nav: ['哲学', '核心功能', '光谱'],
    meet: '遇见 Merlin',
    heroBadge: 'Multi-AI Orchestrator',
    heroTitle: <>一次提问，<br /><span className="rainbow-text">Multi-AI 同时对比.</span></>,
    heroDesc: <>告别为了对比而进行的标签页切换。<br />只需一个提问，即可同时唤醒 Gemini, ChatGPT 和 Claude。<br />您只需从海量答案中择优而用。</>,
    ctaExperience: '免费体验',
    ctaExplore: '查看路线图',
    question: '一个问题',
    perspective: '视角',
    flagshipBadge: '核心引擎',
    flagshipTitle: 'Merlin Response',
    flagshipDesc: '真正的效率源于并行。通过一个问题触发多个大模型的同步响应，无需重复输入即可获得最佳洞察。',
    mainFeatures: [
      { id: 'f1', title: '屏幕分栏', icon: 'Layers' },
      { id: 'f2', title: '同时响应', icon: 'Zap' },
      { id: 'f3', title: '信息对比', icon: 'Scale' },
      { id: 'f4', title: '固定提示词', icon: 'Terminal' },
      { id: 'f5', title: '自定义站点', icon: 'PlusSquare' }
    ],
    detailedFeatures: [
      { text: '所有对话内容均不经过服务器，本地加密保护。', icon: 'ShieldCheck' },
      { text: '一个问题触发多个 AI 同时提供答案。', icon: 'Zap' },
      { text: '通过对比不同模型的回答，有效识别并防止幻觉。', icon: 'Eye' },
      { text: '通过固定提示词获取更精准、更专业的信息。', icon: 'Target' },
      { text: '使用您现有的 AI 账号，保留所有付费权益。', icon: 'UserCheck' },
      { text: '完美支持各 AI 模型的所有原生强大功能。', icon: 'Maximize' },
      { text: '可以根据需要单独控制并使用特定的模型。', icon: 'MousePointer2' },
      { text: '可隐藏主对话窗口，专注于分屏对比工作。', icon: 'Monitor' },
      { text: '支持添加各种网站为 AI 插槽（视站点兼容性而定）。', icon: 'PlusSquare' },
      { text: '登录后自动记忆您的所有插槽配置。', icon: 'Database' },
      { text: '选中文字即可进行即快划词翻译。', icon: 'Languages' }
    ],
    spectrumBadge: 'The Spectrum',
    spectrumTitle: 'Pr!esm Spectrum',
    spectrumDesc: '一个提问引发多元智能的爆发。我们重新定义 AI 交互的边界。',
    pillar1Title: '并行呈现的真相',
    pillar1Desc: '单一 AI 可能会产生幻觉，但三个 AI 同时工作将揭示多维的真相。',
    pillar2Title: '无切换指挥',
    pillar2Desc: '彻底消除切换标签页的疲劳。在流程中同时触发所有顶尖模型。',
    pillar3Title: '战略工作台',
    pillar3Desc: '不是玩具。为追求并行推理精确性的架构师设计的专业工作站。',
    philosophy: '"真正的生产力源于通过对比找到更好的答案。"',
    philosophyBadge: '멀린 效率宣言',
    footerTitle: <>问一次，得全部。</>,
    footerCTA: '部署免费扩展',
    footerMeta1: 'v2.7.1 正式版',
    footerMeta2: '多 AI 引擎就绪',
    footerCopyright: 'Merlin 战略环境 // © 2026 Pr!esm',
    footerLinks: ['哲学', '资产']
  }
}

const IconMap: any = {
  Layers, Zap, Scale, Terminal, PlusSquare,
  ShieldCheck, Eye, Target, UserCheck, Maximize, MousePointer2, Monitor, Database, Languages
}

// 🌈 CIRCULATING RAINBOW ENGINE - High-Performance Prismatic Flow
const RandomMesh = React.memo(() => {
  const rainbowGradient = useMemo(() => `
    radial-gradient(circle at center, rgba(255,255,255,0.65) 0%, transparent 65%),
    conic-gradient(from 0deg at 50% 50%,
      rgba(239, 68, 68, 0.5) 0deg,
      rgba(239, 68, 68, 0.4) 30deg,
      rgba(249, 115, 22, 0.35) 75deg,
      rgba(234, 179, 8, 0.35) 120deg,
      rgba(34, 197, 94, 0.3) 165deg,
      rgba(59, 130, 246, 0.35) 210deg,
      rgba(99, 102, 241, 0.45) 260deg,
      rgba(168, 85, 247, 0.35) 310deg,
      rgba(239, 68, 68, 0.5) 360deg
    )
  `, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -10, contain: 'strict' }}>
      <div className="mesh-bg">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 55, ease: "linear", repeat: Infinity }}
          className="absolute top-[-150vh] left-[-150vw] w-[400vw] h-[400vh]"
          style={{
            background: rainbowGradient,
            filter: 'blur(105px)',
            transformOrigin: '50% 50%',
            willChange: 'transform'
          }}
        />
      </div>
      <div className="mesh-overlay" />
      <div className="mesh-vignette" />
    </div>
  )
})

// 💎 OPTIMIZED PRISMATIC SHARD - GPU Accelerated & Visual Polish
const PrismaticShard = ({ x, y, tx, ty, size, color, delay, onComplete }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, size, size * 0.7],
        x: tx,
        y: ty,
        rotate: [0, Math.random() * 360, Math.random() * 720]
      }}
      transition={{
        duration: 0.8 + Math.random() * 0.4,
        delay,
        ease: [0.23, 1, 0.32, 1]
      }}
      onAnimationComplete={onComplete}
      className="fixed pointer-events-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        zIndex: 9999999,
        width: `${size * 20}px`,
        height: `${size * 20}px`,
        background: `linear-gradient(135deg, #fff 0%, ${color} 100%)`,
        clipPath: `polygon(${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%)`,
        backdropFilter: 'blur(2px)',
        filter: 'brightness(1.4) contrast(1.1)',
        boxShadow: `0 0 25px ${color}66`,
        border: '0.5px solid rgba(255,255,255,0.8)',
        willChange: 'transform, opacity'
      }}
    />
  )
}

// 🚀 ROBUST ENGINE: Listens to everything, everywhere.
const PrismaticBurstEngine = () => {
  const [bursts, setBursts] = useState<any[]>([])

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const id = Math.random().toString(36).substring(2, 11)
      const newShards = Array.from({ length: 14 }).map((_, i) => ({
        id: `${id}-${i}`,
        x: e.clientX,
        y: e.clientY,
        tx: (Math.random() - 0.5) * 600,
        ty: (Math.random() - 0.5) * 600,
        size: 0.4 + Math.random() * 1.8,
        color: ['#818cf8', '#c084fc', '#f472b6', '#60a5fa', '#ffffff'][Math.floor(Math.random() * 5)],
        delay: Math.random() * 0.05
      }))
      setBursts(prev => [...prev, ...newShards])
    }

    // Use mousedown for instant response on every click anywhere in the window
    window.addEventListener('mousedown', handleGlobalClick, { capture: true })
    return () => window.removeEventListener('mousedown', handleGlobalClick, { capture: true })
  }, [])

  return (
    <AnimatePresence>
      {bursts.map(b => (
        <PrismaticShard
          key={b.id}
          {...b}
          onComplete={() => {
            setBursts(prev => prev.filter(p => p.id !== b.id))
          }}
        />
      ))}
    </AnimatePresence>
  )
}

const Navbar = React.memo(({ lang, setLang }: {
  lang: keyof typeof translations,
  setLang: (l: keyof typeof translations) => void
}) => {
  const [showLang, setShowLang] = useState(false)
  const t = translations[lang]

  const LanguageSwitcher = () => (
    <div className="relative">
      <button
        onClick={() => {
          setShowLang(!showLang)
        }}
        className="px-4 py-2.5 rounded-full glass-button-secondary text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transform active:scale-95 transition-transform"
      >
        <Languages className="w-4 h-4" />
        <span className="opacity-80 uppercase tracking-widest">{lang}</span>
      </button>
      <AnimatePresence>
        {showLang && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-12 right-0 glass-card p-2 min-w-[120px] border-white/10 shadow-3xl bg-black/60 backdrop-blur-3xl z-[110]"
          >
            {(['en', 'ko', 'zh'] as const).map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l)
                  setShowLang(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${lang === l
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/50 hover:text-white hover:bg-white/10'
                  }`}
              >
                {l === 'en' ? 'English' : l === 'ko' ? '한국어' : '中文'}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <nav className="fixed top-0 w-full z-[100] px-8 py-3 flex justify-between items-center backdrop-blur-xl border-b border-white/20 bg-white/[0.02] rounded-b-[40px] shadow-2xl shadow-black/10">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/10">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col justify-center translate-y-[2px] -space-y-1">
          <span className="text-[22px] font-black tracking-tighter rainbow-text leading-none">Merlin</span>
          <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-black/40 ml-0.5">AI Lab</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Mobile View: Top Right */}
        <div className="md:hidden">
          <LanguageSwitcher />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center border-l border-white/10 pl-8 ml-2">
          {t.nav.map((item, idx) => (
            <a
              key={item}
              href={`#${['philosophy', 'features', 'spectrum'][idx]}`}
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}

          {/* Desktop Placement: To the left of Meet Merlin */}
          <LanguageSwitcher />

          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full glass-button-primary text-[9px] font-black uppercase tracking-[0.2em]"
          >
            {t.meet}
          </a>
        </div>
      </div>
    </nav>
  )
})
// 💎 REFRACTIVE BLUR REVEAL - Focusing intellectual clarity
const BlurReveal = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(15px)', y: 20 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    transition={{ duration: 1.2, delay, ease: [0.19, 1, 0.22, 1] }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
)

// 🌈 SPECTRAL MULTI-LAYER REVEAL - Prism color separation effect
const SpectralReveal = ({ children, delay = 0 }: any) => {
  return (
    <div className="relative inline-block">
      {/* Red Layer */}
      <motion.div
        initial={{ opacity: 0, x: -10, filter: 'blur(10px)' }}
        animate={{ opacity: [0, 0.4, 0], x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, delay: delay + 0.1, ease: "easeOut" }}
        className="absolute inset-0 text-red-500/30 select-none pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </motion.div>
      {/* Blue Layer */}
      <motion.div
        initial={{ opacity: 0, x: 10, filter: 'blur(10px)' }}
        animate={{ opacity: [0, 0.4, 0], x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
        className="absolute inset-0 text-blue-500/30 select-none pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </motion.div>
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const SectionHeader = React.memo(({ badge, title, desc }: any) => (
  <div className="mb-20 flex flex-col items-center text-center">
    <BlurReveal>
      <div className="flex items-center gap-4 mb-6 justify-center">
        <div className="w-10 h-[1px] bg-prism-accent" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-prism-accent">{badge}</span>
        <div className="w-10 h-[1px] bg-prism-accent" />
      </div>
    </BlurReveal>

    <BlurReveal delay={0.2}>
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-[1.1]">{title}</h2>
    </BlurReveal>

    <BlurReveal delay={0.4}>
      <p className="max-w-2xl text-gray-600 text-sm md:text-base leading-relaxed mx-auto">{desc}</p>
    </BlurReveal>
  </div>
))



const App = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [lang, setLang] = useState<keyof typeof translations>('en')
  const [isHovering, setIsHovering] = useState(false)
  const t = translations[lang]

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cursorRef.current || !containerRef.current) return
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window

    // OPTIMIZATION: Direct DOM manipulation for cursor movement (60fps)
    cursorRef.current.style.left = `${clientX}px`
    cursorRef.current.style.top = `${clientY}px`

    // Normalize coordinates for CSS variables
    const x = (clientX / innerWidth) * 2 - 1
    const y = (clientY / innerHeight) * 2 - 1

    containerRef.current.style.setProperty('--mouse-x', x.toString())
    containerRef.current.style.setProperty('--mouse-y', y.toString())

    // Dynamic rotation based on movement
    const r = (x * 12) - 45
    cursorRef.current.style.transform = `translate(-50%, 0) rotate(${r}deg) scale(${isHovering ? 1.4 : 1})`
    cursorRef.current.style.opacity = '1'

    // Check if hovering over interactive element
    const target = e.target as HTMLElement
    const interactive = !!target.closest('a, button')
    if (interactive !== isHovering) setIsHovering(interactive)
  }

  return (
    <div
      ref={containerRef}
      className="relative select-none text-sm md:text-base overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <RandomMesh />
      <PrismaticBurstEngine />

      {/* Prism Cursor - Ref Driven Animation */}
      <div
        ref={cursorRef}
        className="prism-cursor pointer-events-none fixed opacity-0 transition-opacity duration-300"
        style={{ zIndex: 10000 }}
      />

      {/* 🔮 GLOBAL EFFECT ENGINE - Topmost Layer Trigger */}

      <Navbar lang={lang} setLang={setLang} />

      {/* Hidden SVG Filter for Refraction */}
      <svg className="hidden">
        <filter id="prism-refraction">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
        </filter>
      </svg>

      {/* Hero Section */}
      <section id="philosophy" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 md:pt-32 md:pb-32 px-6">
        <div className="hero-glow" />
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10"
        >
          <BlurReveal>
            <div className="mb-4 md:mb-8 inline-block">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">{t.heroBadge}</span>
            </div>
          </BlurReveal>

          <SpectralReveal delay={0.3}>
            <h1 className="text-5xl md:text-[90px] font-black tracking-tighter leading-[1.15] mb-6 md:mb-10 hero-gradient-text">
              {t.heroTitle}
            </h1>
          </SpectralReveal>

          <BlurReveal delay={0.6}>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-lg font-medium mb-10 md:mb-16 leading-relaxed px-4 md:px-0">
              {t.heroDesc}
            </p>
          </BlurReveal>

          <BlurReveal delay={0.9}>
            <div className="flex justify-center items-center">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full glass-button-primary text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 transform active:scale-95 transition-transform"
              >
                {t.ctaExperience} <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </BlurReveal>
        </motion.div>


      </section>

      {/* Main Flagship Section */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <SectionHeader
          badge={t.flagshipBadge}
          title={t.flagshipTitle}
          desc={t.flagshipDesc}
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
          {t.mainFeatures.map((feat: any, idx: number) => (
            <BlurReveal key={feat.id} delay={idx * 0.1} className="h-full">
              <div className="glass-card p-8 flex flex-col items-center text-center group hover:bg-black/5 transition-all h-full" role="article">
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6 text-prism-accent group-hover:scale-110 transition-transform">
                  {IconMap[feat.icon] && React.createElement(IconMap[feat.icon], { className: "w-8 h-8", "aria-hidden": "true" })}
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em]">{feat.title}</h3>
                <span className="sr-only">Merlin {feat.title} feature</span>
              </div>
            </BlurReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32" role="list">
          {t.detailedFeatures.map((feat: any, idx: number) => (
            <BlurReveal key={idx} delay={idx * 0.05}>
              <div className="glass-card p-6 flex items-center gap-5 group hover:bg-black/5 transition-all" role="listitem">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-prism-accent group-hover:scale-110 transition-transform flex-shrink-0">
                  {IconMap[feat.icon] && React.createElement(IconMap[feat.icon], { className: "w-5 h-5", "aria-hidden": "true" })}
                </div>
                <p className="text-gray-600 text-sm font-medium leading-relaxed group-hover:text-black transition-colors text-left transition-all">
                  {feat.text}
                </p>
              </div>
            </BlurReveal>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 bg-black/[0.02]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-12 leading-tight text-black/80">{t.philosophy}</h3>
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-[1px] bg-prism-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-600">{t.philosophyBadge}</span>
          </div>
        </div>
      </section>

      {/* Spectrum Section */}
      <section id="spectrum" className="py-32 px-6 max-w-7xl mx-auto">
        <SectionHeader
          badge={t.spectrumBadge}
          title={t.spectrumTitle}
          desc={t.spectrumDesc}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlurReveal delay={0.1}>
            <div className="glass-card spectrum-card p-10 border-prism-accent/10 hover:bg-white/60 transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-prism-accent mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.pillar1Title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{t.pillar1Desc}</p>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <div className="glass-card spectrum-card p-10 border-prism-accent/20 hover:bg-white/60 transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-prism-accent mb-8 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.pillar2Title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{t.pillar2Desc}</p>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <div className="glass-card spectrum-card p-10 border-prism-accent/10 hover:bg-white/60 transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-prism-accent mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.pillar3Title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{t.pillar3Desc}</p>
            </div>
          </BlurReveal>
        </div>
      </section>



      {/* Footer CTA */}
      <footer className="py-32 px-6 border-t border-black/5">
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
              <div className="flex items-center gap-2 mt-1"><div className="w-1 h-1 rounded-full bg-black/20" /> {t.footerMeta2}</div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-700">
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/priesm_ai/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
            </a>
            <Globe className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
          </div>
          <span>{t.footerCopyright}</span>
          <div className="flex gap-8">
            {t.footerLinks.map(link => (
              <span key={link} className="cursor-pointer hover:text-black">{link}</span>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
