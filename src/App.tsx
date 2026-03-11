import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import {
  ChevronRight,
  Instagram,
  Layers,
  Sparkles,
  Zap,
  Languages,
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

    meet: 'Meet Merlin',
    heroBadge: 'The Multi-AI Orchestrator',
    heroTitle: <>One Prompt,<br /><span className="rainbow-text">Multi-AI Comparison.</span></>,
    heroDesc: <>The ultimate Multi-AI parallel intelligence workspace.<br />Wake up Gemini, ChatGPT, and Claude with a single question.<br />Stop tab-switching and compare AI answers in real-time.</>,
    ctaExperience: 'Get Free Multi-AI Extension',
    ctaExplore: 'View Roadmap',
    question: 'One Prompt',
    perspective: 'Multi-AI Response',
    flagshipBadge: 'Multi-AI Core Engine',
    flagshipTitle: 'Merlin Multi-AI',
    flagshipDesc: <>True speed comes from comparing multiple AIs.<br />Compare responses from multiple AIs simultaneously with a single prompt to find the best insights.</>,
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
    footerLinks: [
      { name: 'Privacy Policy', link: '/privacy/' }
    ]
  },
  ko: {

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
    flagshipDesc: <>진정한 속도는 여러 AI를 비교하는데서 나옵니다.<br />하나의 프롬프트로 여러 AI의 응답을 동시에 비교하여 최적의 인사이트를 내세요.</>,
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
    footerLinks: [
      { name: '개인정보처리방침', link: '/privacy/' }
    ]
  },
  zh: {

    meet: '遇见 Merlin',
    heroBadge: 'Multi-AI Orchestrator',
    heroTitle: <>一次提问，<br /><span className="rainbow-text">Multi-AI 同时对比.</span></>,
    heroDesc: <>告别为了对比而进行的标签页切换。<br />只需一个提问，即可同时唤醒 Gemini, ChatGPT 和 Claude。<br />您只需从海量答案中择优而用。</>,
    ctaExperience: '免费体验',
    ctaExplore: '查看路线图',
    question: '一个问题',
    perspective: '视角',
    flagshipBadge: '多人工智能核心引擎',
    flagshipTitle: 'Merlin Multi-AI',
    flagshipDesc: <>真正的速度源于多种 AI 的对比。<br />通过一个提示词同时对比多个 AI 的回答，获取最佳见解。</>,
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
    footerLinks: [
      { name: '隐私政策', link: '/privacy/' }
    ]
  }
}

const IconMap: any = {
  Layers, Zap, Scale, Terminal, PlusSquare,
  ShieldCheck, Eye, Target, UserCheck, Maximize, MousePointer2, Monitor, Database, Languages
}

// 💎 PRISMATIC SHARD - GPU Accelerated Click Effect
const PrismaticShard = React.memo(({ x, y, tx, ty, size, color, delay, onComplete }: any) => {
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
})

const SHARD_COLORS = ['#818cf8', '#c084fc', '#f472b6', '#60a5fa', '#ffffff']

// 🚀 PRISMATIC BURST ENGINE: Global click effect system
const PrismaticBurstEngine = React.memo(() => {
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
        color: SHARD_COLORS[Math.floor(Math.random() * SHARD_COLORS.length)],
        delay: Math.random() * 0.05
      }))
      setBursts((prev: any[]) => [...prev.slice(-36), ...newShards])
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
})

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
      <a href="/" className="flex items-center gap-4 group transition-transform active:scale-95" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new Event('popstate')); }}>
        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col justify-center translate-y-[2px] -space-y-1">
          <span className="text-[22px] font-black tracking-tighter rainbow-text leading-none">Merlin</span>
          <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-white/50 ml-0.5">AI Lab</span>
        </div>
      </a>

      <div className="flex items-center gap-4">
        {/* Mobile View: Top Right */}
        <div className="md:hidden">
          <LanguageSwitcher />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
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
      {/* Spectral Glow Layer 1 */}
      <motion.div
        initial={{ opacity: 0, x: -5, filter: 'blur(10px)' }}
        animate={{ opacity: [0, 0.4, 0], x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, delay: delay + 0.1, ease: "easeOut" }}
        className="absolute inset-0 text-red-500/30 select-none pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </motion.div>
      {/* Spectral Glow Layer 2 */}
      <motion.div
        initial={{ opacity: 0, x: 5, filter: 'blur(10px)' }}
        animate={{ opacity: [0, 0.4, 0], x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
        className="absolute inset-0 text-blue-500/30 select-none pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </motion.div>
      {/* Main Content Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const SectionHeader = React.memo(({ badge, title, desc, className = "mb-20" }: any) => (
  <div className={`${className} flex flex-col items-center text-center`}>
    <BlurReveal>
      <div className="flex items-center gap-4 mb-6 justify-center">
        <div className="w-10 h-[1px] bg-white/20" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">{badge}</span>
        <div className="w-10 h-[1px] bg-white/20" />
      </div>
    </BlurReveal>

    <BlurReveal delay={0.2}>
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-[1.1] text-white">{title}</h2>
    </BlurReveal>

    <BlurReveal delay={0.4}>
      <p className="max-w-2xl text-white/60 text-sm md:text-base leading-relaxed mx-auto">{desc}</p>
    </BlurReveal>
  </div>
))

const Hero = React.memo(({ t }: { t: any }) => (
  <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 md:pt-32 md:pb-32 px-6">
    <div className="hero-glow" />
    <div className="text-center z-10">
      <BlurReveal>
        <div className="mb-4 md:mb-8 inline-block">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/80">{t.heroBadge}</span>
        </div>
      </BlurReveal>

      <SpectralReveal delay={0.3}>
        <h1 className="text-5xl md:text-[90px] font-black tracking-tighter leading-[1.1] mb-6 md:mb-10 text-white selection:bg-white/30">
          <span className="block opacity-90">One Prompt,</span>
          <span className="block rainbow-text">Multi-AI Comparison.</span>
        </h1>
      </SpectralReveal>

      <BlurReveal delay={0.6}>
        <p className="max-w-2xl mx-auto text-white/70 text-sm md:text-lg font-medium mb-10 md:mb-16 leading-relaxed px-4 md:px-0">
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
    </div>
  </section>
))

const VideoDemo = React.memo(({ src, className = "" }: { src: string, className?: string }) => (
  <BlurReveal delay={0.6} className={className}>
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-prism-accent/40 to-purple-500/40 rounded-2xl blur-2xl opacity-50 group-hover:opacity-90 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative !rounded-2xl overflow-hidden border-[4px] border-white/20 backdrop-blur-2xl shadow-[0_25px_45px_-15px_rgba(0,0,0,0.6)] transform-gpu will-change-transform">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto scale-[1.01]"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
    </div>
  </BlurReveal>
))

const FlagshipFeatures = React.memo(({ t }: { t: any }) => (
  <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader
      badge={t.flagshipBadge}
      title={t.flagshipTitle}
      desc={t.flagshipDesc}
      className="mb-10"
    />

    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 md:mb-20">
      <div className="md:col-start-2 md:col-span-3 md:px-0">
        <VideoDemo src="/video/meriln_5.mp4" />
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
      {t.mainFeatures.map((feat: any, idx: number) => (
        <BlurReveal key={feat.id} delay={idx * 0.1} className="h-full">
          <div className="glass-card p-4 md:p-8 flex flex-col items-center text-center group hover:bg-black/5 transition-all h-full relative" role="article">
            {/* Simple Numerical Indicator */}
            <div className="absolute top-4 left-4 text-[10px] md:text-xs font-black text-black/20 group-hover:text-prism-accent/40 transition-colors">
              0{idx + 1}
            </div>
            
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/5 flex items-center justify-center mb-4 md:mb-6 text-prism-accent group-hover:scale-110 transition-transform">
              {IconMap[feat.icon] && React.createElement(IconMap[feat.icon], { className: "w-5 h-5 md:w-8 md:h-8", "aria-hidden": "true" })}
            </div>
            <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em]">{feat.title}</h3>
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
            <p className="text-gray-600 text-sm font-medium leading-relaxed group-hover:text-black transition-all text-left">
              {feat.text}
            </p>
          </div>
        </BlurReveal>
      ))}
    </div>
  </section>
))

const Philosophy = React.memo(({ t }: { t: any }) => (
  <section id="philosophy" className="py-40 my-20 w-full backdrop-blur-3xl bg-white/[0.05] border-y border-white/10">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <BlurReveal>
        <h3 className="text-2xl md:text-4xl font-bold mb-12 leading-tight text-white/90">{t.philosophy}</h3>
      </BlurReveal>
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-[1px] bg-white/20" />
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">{t.philosophyBadge}</span>
      </div>
    </div>
  </section>
))

const Spectrum = React.memo(({ t }: { t: any }) => (
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
))

const AURORA_BLOBS = [
  { color: '#ff0080', w: '90vw', h: '90vh', d: 35, x: [0, 40, -20, -30, 0], y: [0, 20, 30, -10, 0], r: 360, b: 'overlay' as const },
  { color: '#00e1ff', w: '100vw', h: '100vh', d: 45, x: [0, -40, 20, 40, 0], y: [0, -20, -30, 10, 0], r: -360, b: 'multiply' as const },
  { color: '#ffea00', w: '85vw', h: '85vh', d: 40, x: [0, 25, -30, 10, 0], y: [0, 30, -20, 40, 0], r: 180, b: 'difference' as const },
  { color: '#7a00ff', w: '110vw', h: '110vh', d: 55, x: [0, -25, 35, -40, 0], y: [0, -30, 25, -20, 0], r: -180, b: 'multiply' as const },
  { color: '#00ff40', w: '90vw', h: '90vh', d: 30, x: [0, 40, -10, -30, 0], y: [0, -15, 40, 10, 0], r: 540, b: 'overlay' as const },
  { color: '#ff3300', w: '80vw', h: '80vh', d: 25, x: [0, -45, 0, 45, 0], y: [0, 10, -10, 0, 0], r: 0, b: 'difference' as const }, 
  { color: '#ffffff', w: '50vw', h: '50vh', d: 22, x: [0, 30, -30, 0, 0], y: [0, -30, 30, 0, 0], r: 720, b: 'difference' as const },
  { color: '#0066ff', w: '70vw', h: '70vh', d: 50, x: [-20, 20, -20], y: [-20, 20, -20], r: 0, b: 'overlay' as const },
  { color: '#ff00ff', w: '75vw', h: '75vh', d: 40, x: [20, -20, 20], y: [20, -20, 20], r: 0, b: 'screen' as const },
];

const AuroraBackground = React.memo(() => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        mouseX.set((e.clientX - window.innerWidth / 2) * 0.05);
        mouseY.set((e.clientY - window.innerHeight / 2) * 0.05);
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-white select-none" style={{ zIndex: -10 }}>
      {/* Optimized Parallax Layer */}
      <motion.div 
        style={{ x: springX, y: springY, scale: 1.15 }}
        className="absolute inset-0 flex items-center justify-center filter blur-[80px] md:blur-[110px] transform-gpu"
      >
        {AURORA_BLOBS.map((b, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: b.x[0] + 'vw', 
              y: b.y[0] + 'vh', 
              rotate: 0, 
              scale: 1, 
              opacity: 0.7 
            }}
            animate={{
              x: b.x.map(v => `${v}vw`),
              y: b.y.map(v => `${v}vh`),
              rotate: [0, b.r],
              scale: [1, 1.25, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ duration: b.d, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full"
            style={{
              width: b.w,
              height: b.h,
              background: b.color,
              mixBlendMode: b.b,
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </motion.div>

      {/* Surface Texture Layer - Optimized */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

    </div>
  );
});



const PageLayout = ({ children, t }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
    <Footer t={t} />
  </motion.div>
)

const PrivacySection = React.memo(() => (
  <section className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen relative z-10">
    <BlurReveal>
      <div className="glass-card p-10 md:p-16 border border-black/5 shadow-2xl relative overflow-hidden text-left mb-12">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-center">Privacy Policy</h1>
        <p className="text-gray-500 text-center text-lg mb-2">Priesm: Multi-LLM & AI Macro Chrome Extension</p>
        <p className="text-gray-400 text-center text-xs mb-12 font-mono uppercase tracking-widest">Last Updated: March 7, 2026</p>
        <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl mb-12 text-blue-900 text-sm leading-relaxed">
          <strong className="text-blue-700 block mb-2 font-black uppercase tracking-wider text-[10px]">Google API Services Disclosure:</strong>
          This extension is designed to comply with the Google API Services User Data Policy, including the Limited Use requirements. We prioritize data minimization and strictly avoid unauthorized data harvesting.
        </div>
        <div className="space-y-12">
          <article>
            <h2 className="text-xl font-black mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-xs">1</span>
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed pl-11">
              "Priesm: Multi-LLM & AI Macro" values your privacy. This policy explicitly details how we collect, process, store, and share user data. We do not engage in selling user data or unauthorized data collection.
            </p>
          </article>
          <article>
            <h2 className="text-xl font-black mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-xs">2</span>
              Detailed Data Collection and Usage
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 pl-11">This product collects data solely to provide multi-LLM workspace and AI automation services.</p>
            <div className="pl-11 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="border-b border-gray-200"><th className="py-3 px-4 text-left font-black text-gray-400 uppercase tracking-widest text-[10px]">Category</th><th className="py-3 px-4 text-left font-black text-gray-400 uppercase tracking-widest text-[10px]">Purpose</th><th className="py-3 px-4 text-left font-black text-gray-400 uppercase tracking-widest text-[10px]">Storage</th></tr></thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100"><td className="py-4 px-4 font-bold">Google IDs</td><td className="py-4 px-4">Authentication via OAuth 2.0.</td><td className="py-4 px-4">Supabase (Cloud)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-4 px-4 font-bold">App Settings</td><td className="py-4 px-4">UI preferences & bot configs.</td><td className="py-4 px-4">Local & Supabase</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-4 px-4 font-bold">AI Macros</td><td className="py-4 px-4">Automation tasks execution.</td><td className="py-4 px-4">Supabase (Encrypted)</td></tr>
                  <tr><td className="py-4 px-4 font-bold">Payments</td><td className="py-4 px-4">Pro version validation.</td><td className="py-4 px-4">Lemon Squeezy API</td></tr>
                </tbody>
              </table>
            </div>
          </article>
          <article>
            <h2 className="text-xl font-black mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-xs">3</span>
              Transparency on Permissions
            </h2>
            <ul className="space-y-4 pl-11">
              <li className="flex gap-4"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" /><p className="text-gray-600 text-sm"><strong>audioCapture (Microphone):</strong> Used for voice input AI slots. Data is sent directly to AI providers.</p></li>
              <li className="flex gap-4"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" /><p className="text-gray-600 text-sm"><strong>declarativeNetRequest:</strong> Bypass cross-origin restrictions for AI iframes.</p></li>
              <li className="flex gap-4"><span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0" /><p className="text-gray-600 text-sm"><strong>Host Permissions:</strong> Interact with web pages for Macros.</p></li>
            </ul>
          </article>
          <article className="border-t border-gray-100 pt-12">
            <h2 className="text-xl font-black mb-6">Contact and Support</h2>
            <div className="bg-black text-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left"><p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-1">Developer</p><p className="text-lg font-black">Jung Jidu</p></div>
              <a href="mailto:wjdwlen@naver.com" className="px-8 py-3 bg-white text-black rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform">wjdwlen@naver.com</a>
            </div>
          </article>
        </div>
      </div>
      <div className="text-center">
        <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new Event('popstate')); }} className="inline-block px-12 py-4 border border-black/10 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all shadow-xl">Back to Home</a>
      </div>
    </BlurReveal>
  </section>
))

const Footer = React.memo(({ t }: { t: any }) => (
  <footer className="py-32 px-6 border-t border-black/5">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-white px-4">
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
        <div className="text-left font-mono text-[9px] uppercase tracking-widest text-white">
          <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-green-500" /> {t.footerMeta1}</div>
          <div className="flex items-center gap-2 mt-1"><div className="w-1 h-1 rounded-full bg-white/50" /> {t.footerMeta2}</div>
        </div>
      </div>
    </div>

    <div className="mt-32 pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white">
      <div className="flex items-center gap-6 text-white">
        <a href="https://www.instagram.com/priesm_ai/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 hover:opacity-70 transition-opacity cursor-pointer" />
        </a>
      </div>
      <span className="text-white">{t.footerCopyright}</span>
      <div className="flex gap-8 text-white">
        {t.footerLinks.map((item: any) => (
          <a key={item.name} href={item.link} onClick={(e) => { if (item.link.startsWith('/')) { e.preventDefault(); window.history.pushState({}, '', item.link); window.dispatchEvent(new Event('popstate')); } }} className="hover:opacity-70 transition-opacity uppercase cursor-pointer">{item.name}</a>
        ))}
      </div>
    </div>
  </footer>
))



const App = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [lang, setLang] = useState<keyof typeof translations>(() => {
    if (typeof window === 'undefined') return 'en'
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang') as any
    if (urlLang && translations[urlLang as keyof typeof translations]) return urlLang
    const browserLang = navigator.language.split('-')[0] as any
    if (translations[browserLang as keyof typeof translations]) return browserLang
    return 'en'
  })
  const [isHovering, setIsHovering] = useState(false)
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // SEO: Update HTML lang attribute and document title dynamically
  useEffect(() => {
    document.documentElement.lang = lang
    const isPrivacy = path.includes('/privacy')
    const titles: Record<string, string> = {
      en: isPrivacy ? 'Privacy Policy | Merlin Pr!esm' : 'Merlin | Pr!esm Parallel Intelligence - Multi-AI Orchestrator',
      ko: isPrivacy ? '개인정보처리방침 | Merlin Pr!esm' : 'Merlin | Pr!esm 병렬 지능 - 멀티AI 지휘소',
      zh: isPrivacy ? '隐私政策 | Merlin Pr!esm' : 'Merlin | Pr!esm 并行智能 - 多AI指挥中心'
    }
    const descs: Record<string, string> = {
      en: 'Compare ChatGPT, Claude, and Gemini simultaneously. The ultimate Multi-AI parallel intelligence workspace.',
      ko: '멀티AI(ChatGPT, Claude, Gemini) 답변을 한 화면에서 동시에 비교하고 분석하세요.',
      zh: '同时对比ChatGPT、Claude和Gemini的回答。终极多AI并行智能工作空间。'
    }
    document.title = titles[lang] || titles.en
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', descs[lang] || descs.en)

    // GEO: Update canonical URL with language parameter
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      const base = 'https://priesm.ledpa7.com'
      canonical.setAttribute('href', lang === 'en' ? base : `${base}/?lang=${lang}`)
    }
  }, [lang, path])

  const t = translations[lang]

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cursorRef.current || !containerRef.current) return
    const { clientX, clientY } = e

    // Direct DOM manipulation for cursor movement (60fps)
    cursorRef.current.style.left = `${clientX}px`
    cursorRef.current.style.top = `${clientY}px`

    // Normalize coordinates for CSS variables
    const x = (clientX / window.innerWidth) * 2 - 1
    const y = (clientY / window.innerHeight) * 2 - 1

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
  }, [isHovering])

  return (
    <div
      ref={containerRef}
      className="relative select-none text-sm md:text-base overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <AuroraBackground />
      

      {/* 🌬️ REFINED BREATHING ATMOSPHERE - Pulses behind content, above aurora */}
      <motion.div 
        initial={{ opacity: 0.15, scale: 1 }}
        animate={{ 
          opacity: [0.15, 0.75, 0.15],
          scale: [1, 1.03, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="fixed inset-0 bg-white pointer-events-none z-[-1]"
      />

      <PrismaticBurstEngine />

      <div
        ref={cursorRef}
        className="prism-cursor pointer-events-none fixed opacity-0 transition-opacity duration-300"
        style={{ zIndex: 10000 }}
      />

      <Navbar lang={lang} setLang={setLang} />



      <AnimatePresence mode="wait">
        {path.includes('/privacy') ? (
          <PageLayout key="privacy" t={t}><PrivacySection /></PageLayout>
        ) : (
          <PageLayout key="home" t={t}>
            <Hero t={t} />
            <FlagshipFeatures t={t} />
            <Philosophy t={t} />
            <Spectrum t={t} />
          </PageLayout>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
