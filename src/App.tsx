import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff, BookOpen, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PawCursorTrail } from './components/PawCursorTrail';
import { PuffyButton } from './components/ui/PuffyButton';
import { BoxCat, ShieldPaw, YarnBall, PawLogo } from './components/ui/CatIcons';
import sleepSvg from './assets/sleep.svg';

function App() {
  const { t } = useTranslation();
  const [showMeow, setShowMeow] = useState(false);

  const features = [
    {
      icon: BoxCat,
      title: t('features.zeroSetup.title'),
      desc: t('features.zeroSetup.desc'),
      bg: 'bg-cat-orange/15',
    },
    {
      icon: ShieldPaw,
      title: t('features.privacy.title'),
      desc: t('features.privacy.desc'),
      bg: 'bg-emerald-500/15',
    },
    {
      icon: YarnBall,
      title: t('features.skills.title'),
      desc: t('features.skills.desc'),
      bg: 'bg-violet-500/15',
    },
  ];

  const privacyPoints = [
    { icon: ShieldCheck, color: 'text-emerald-500', text: t('privacy.point1') },
    { icon: Lock, color: 'text-cat-orange', text: t('privacy.point2') },
    { icon: EyeOff, color: 'text-violet-500', text: t('privacy.point3') },
  ];

  // "meow" Konami easter egg
  useEffect(() => {
    const sequence = ['m', 'e', 'o', 'w'];
    let index = 0;

    function onKey(e: KeyboardEvent) {
      if (e.key.toLowerCase() === sequence[index]) {
        index++;
        if (index === sequence.length) {
          index = 0;
          setShowMeow(true);
          setTimeout(() => setShowMeow(false), 2500);
        }
      } else {
        index = e.key.toLowerCase() === sequence[0] ? 1 : 0;
      }
    }

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cat-orange selection:text-white overflow-x-hidden">
      {/* Texture Layer */}
      <div className="bg-noise" />

      {/* Paw Cursor Trail */}
      <PawCursorTrail />

      {/* Subtle Paw Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] -z-20 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="12" r="2.5" />
              <circle cx="12" cy="7" r="2.5" />
              <circle cx="18" cy="12" r="2.5" />
            </svg>
          </div>
        ))}
      </div>

      <Navbar />

      <main>
        <Hero />

        {/* Features Section */}
        <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-cat-fg mb-4">
              {t('features.heading')}<span className="text-cat-orange-dark">{t('features.headingHighlight')}</span>?
            </h2>
            <p className="text-xl text-cat-muted font-medium max-w-lg mx-auto">
              {t('features.sub')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8, rotate: -1 }}
                className="p-10 bg-cat-surface rounded-[2.5rem] shadow-cozy border-b-4 border-cat-border text-center transition-colors"
              >
                <div className={`w-16 h-16 ${f.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <f.icon className="w-8 h-8 text-cat-orange" />
                </div>
                <h3 className="text-2xl font-black mb-4">{f.title}</h3>
                <p className="text-cat-muted font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Privacy Section */}
        <section id="privacy" className="py-24 px-6 bg-cat-surface/60 backdrop-blur-sm transition-colors">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-black text-cat-fg mb-6">
                {t('privacy.heading')}<br />in Your <span className="text-cat-orange-dark">{t('privacy.headingHighlight')}</span>
              </h2>
              <p className="text-lg text-cat-muted font-medium mb-8 max-w-md leading-relaxed">
                {t('privacy.desc')}
              </p>
              <div className="space-y-5">
                {privacyPoints.map((p, i) => (
                  <motion.div
                    key={p.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-cat-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <p.icon className={`w-5 h-5 ${p.color}`} />
                    </div>
                    <span className="text-cat-muted font-bold">{p.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1 flex items-center justify-center"
            >
              {/* Sleeping cat in a dotted box */}
              <div className="relative w-72 h-72 border-4 border-dashed border-cat-orange/20 rounded-[3rem] flex items-center justify-center bg-cat-orange/5">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img src={sleepSvg} alt="" className="w-48 h-48 object-contain" />
                </motion.div>
                {/* Little lock icon on the box */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-cat-surface rounded-xl shadow-cozy flex items-center justify-center transition-colors">
                  <Lock className="w-5 h-5 text-cat-orange" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Open Source Section */}
        <section id="open-source" className="py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-cat-fg mb-6">
              {t('opensource.heading')} <span className="text-cat-orange-dark">{t('opensource.headingHighlight')}</span>
            </h2>
            <p className="text-xl text-cat-muted font-medium mb-10 leading-relaxed">
              {t('opensource.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
              <a href="https://github.com/huaruic/catclaw" target="_blank" rel="noopener noreferrer">
                <PuffyButton variant="primary" size="lg" className="gap-2">
                  <Code className="w-5 h-5" />
                  {t('opensource.github')}
                </PuffyButton>
              </a>
              <a href="https://github.com/huaruic/catclaw" target="_blank" rel="noopener noreferrer">
                <PuffyButton variant="secondary" size="lg" className="gap-2">
                  <BookOpen className="w-5 h-5" />
                  {t('opensource.docs')}
                </PuffyButton>
              </a>
            </div>

            {/* Decorative paw prints */}
            <div className="flex items-center justify-center gap-6 opacity-15">
              {[...Array(5)].map((_, i) => (
                <PawLogo
                  key={i}
                  className="w-6 h-6 text-cat-orange"
                  style={{ transform: `rotate(${-20 + i * 10}deg)` }}
                />
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-cat-orange/20 bg-cat-surface/50 backdrop-blur-sm transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cat-orange rounded-xl flex items-center justify-center">
              <PawLogo className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-cat-fg">
              CatClaw
            </span>
          </div>

          <div className="flex items-center gap-8 font-bold text-cat-muted text-sm">
            <a href="#features" className="hover:text-cat-orange transition-colors">{t('nav.features')}</a>
            <a href="#privacy" className="hover:text-cat-orange transition-colors">{t('nav.privacy')}</a>
            <a href="#open-source" className="hover:text-cat-orange transition-colors">{t('nav.openSource')}</a>
          </div>

          <div className="text-cat-muted font-bold text-sm flex flex-col md:flex-row items-center gap-1.5 md:gap-3">
            <p className="flex items-center gap-1.5">
              {t('footer.madeWith')}
              <PawLogo className="w-3.5 h-3.5 text-cat-orange inline-block" />
              {t('footer.andCatnip')} &copy; 2026
            </p>
            <span className="hidden md:inline text-cat-border/50">•</span>
            <p>{t('footer.designsBy')}</p>
          </div>
        </div>
      </footer>

      {/* Meow Easter Egg Overlay */}
      <AnimatePresence>
        {showMeow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-cat-bg/90 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img src={sleepSvg} alt="" className="w-64 h-64 object-contain mb-6" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-black text-cat-orange tracking-widest"
            >
              purrrr...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
