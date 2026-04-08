import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PuffyButton } from './ui/PuffyButton';
import { AppMockup } from './AppMockup';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cat-orange/15 text-cat-orange font-bold text-sm mb-8 shadow-sm border border-cat-orange/20"
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
            Stay <span className="text-cat-orange">{t('hero.titleHighlight')}</span>.
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
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
          >
            <a href="https://github.com/huaruic/catclaw/releases/download/v0.2.0-alpha/CatClaw-1.0.0-arm64.dmg">
              <PuffyButton size="xl" className="gap-3 group">
                <Download className="w-6 h-6 group-hover:scale-125 transition-transform" />
                {t('hero.download')}
              </PuffyButton>
            </a>
            <a href="https://github.com/huaruic/catclaw" target="_blank" rel="noopener noreferrer">
              <PuffyButton variant="secondary" size="xl">
                {t('hero.github')}
              </PuffyButton>
            </a>
          </motion.div>

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
