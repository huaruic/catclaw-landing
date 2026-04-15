import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PuffyButton } from './ui/PuffyButton';
import { AppMockup } from './AppMockup';

const MAC_DMG = 'https://github.com/huaruic/catclaw/releases/download/v0.2.0-alpha/CatClaw-1.0.0-arm64.dmg'
const WIN_EXE = 'https://github.com/huaruic/catclaw/releases/download/v1.0.0-win-test/CatClaw.Setup.1.0.0.exe'

const defaultIsMac = /Mac|iPhone|iPad/.test(navigator.userAgent)

type Platform = 'mac' | 'win'

const platforms: Record<Platform, { url: string; labelKey: string }> = {
  mac: { url: MAC_DMG, labelKey: 'hero.downloadMac' },
  win: { url: WIN_EXE, labelKey: 'hero.downloadWin' },
}

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [platform, setPlatform] = useState<Platform>(defaultIsMac ? 'mac' : 'win')

  const current = platforms[platform]
  const otherPlatform: Platform = platform === 'mac' ? 'win' : 'mac'
  const otherLabel = otherPlatform === 'mac' ? 'macOS' : 'Windows'

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[10%] right-[5%] w-[40rem] h-[40rem] bg-cat-orange/15 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] bg-cat-orange/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cat-orange/15 text-cat-orange-dark font-bold text-sm mb-8 shadow-sm border border-cat-orange/20"
          >
            <Sparkles className="w-4 h-4 fill-cat-orange" />
            {t('hero.badge')}
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-cat-fg leading-[0.9] tracking-tighter mb-8"
          >
            {t('hero.title')} <br />
            Stay <span className="text-cat-orange-dark">{t('hero.titleHighlight')}</span>.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-cat-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center sm:items-end justify-center lg:justify-start gap-5"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex items-center rounded-full bg-cat-surface border border-cat-border p-1 mb-1">
                <button
                  onClick={() => setPlatform('mac')}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                    platform === 'mac'
                      ? 'bg-cat-orange text-white shadow-sm'
                      : 'text-cat-muted hover:text-cat-fg'
                  }`}
                >
                  macOS
                </button>
                <button
                  onClick={() => setPlatform('win')}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                    platform === 'win'
                      ? 'bg-cat-orange text-white shadow-sm'
                      : 'text-cat-muted hover:text-cat-fg'
                  }`}
                >
                  Windows
                </button>
              </div>
              <div className="relative w-[280px] sm:w-[320px] h-16">
                <a href={current.url} className="block w-full h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={platform}
                      initial={{ y: 4, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -4, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 flex justify-center"
                    >
                      <PuffyButton size="xl" className="gap-3 group w-full h-full whitespace-nowrap">
                        <Download className="w-6 h-6 group-hover:scale-125 transition-transform shrink-0" />
                        {t(current.labelKey)}
                      </PuffyButton>
                    </motion.div>
                  </AnimatePresence>
                </a>
              </div>
            </div>
            <a href="https://github.com/huaruic/catclaw" target="_blank" rel="noopener noreferrer" className="h-16">
              <PuffyButton variant="secondary" size="xl" className="h-full px-8 whitespace-nowrap">
                {t('hero.github')}
              </PuffyButton>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm text-cat-muted font-bold text-center lg:text-left"
          >
            {t('hero.alsoAvailableFor')}{' '}
            <button
              onClick={() => setPlatform(otherPlatform)}
              className="underline underline-offset-4 decoration-cat-orange/30 hover:text-cat-orange transition-colors cursor-pointer"
            >
              {otherLabel}
            </button>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60"
          >
            <div className="flex items-center gap-2 font-bold text-cat-muted">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              {t('hero.tagPrivacy')}
            </div>
            <div className="flex items-center gap-2 font-bold text-cat-muted">
              <Zap className="w-5 h-5 text-cat-orange" />
              {t('hero.tagSetup')}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0, rotate: 5 }}
          animate={{ x: 0, opacity: 1, rotate: -2 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="flex-1 relative"
        >
          {/* App Mockup */}
          <AppMockup />
        </motion.div>
      </div>
    </section>
  );
};
