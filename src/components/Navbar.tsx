import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PuffyButton } from './ui/PuffyButton';
import { PawLogo } from './ui/CatIcons';
import { useTheme } from '../hooks/useTheme';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggle: toggleTheme } = useTheme();

  const toggleLang = () => {
    const next = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-0 right-0 z-40 px-6 pointer-events-none"
    >
      <nav className="max-w-6xl mx-auto bg-cat-surface/70 backdrop-blur-xl border border-cat-surface/50 shadow-cozy rounded-[2.5rem] px-8 py-3 flex items-center justify-between pointer-events-auto transition-colors">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 14 }}
            className="w-10 h-10 bg-cat-orange rounded-2xl flex items-center justify-center shadow-cozy rotate-[-6deg]"
          >
            <PawLogo className="text-white w-6 h-6" />
          </motion.div>
          <span className="text-2xl font-black tracking-tight text-cat-fg">
            Cat<span className="text-cat-orange-dark">Claw</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 font-bold text-cat-muted">
          <a href="#features" className="hover:text-cat-orange transition-colors">{t('nav.features')}</a>
          <a href="#privacy" className="hover:text-cat-orange transition-colors">{t('nav.privacy')}</a>
          <a href="#open-source" className="hover:text-cat-orange transition-colors">{t('nav.openSource')}</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label={i18n.language === 'zh' ? 'Switch to English' : '切换到中文'}
            className="w-9 h-9 rounded-xl bg-cat-surface-alt flex items-center justify-center text-sm font-black text-cat-muted hover:text-cat-orange transition-colors border border-cat-border"
          >
            {i18n.language === 'zh' ? 'EN' : '中'}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-xl bg-cat-surface-alt flex items-center justify-center text-cat-muted hover:text-cat-orange transition-colors border border-cat-border"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="https://github.com/huaruic/catclaw/releases/download/v0.2.0-alpha/CatClaw-1.0.0-arm64.dmg">
            <PuffyButton variant="primary" size="md" className="hidden sm:flex gap-2">
              <Download className="w-4 h-4" />
              {t('nav.download')}
            </PuffyButton>
          </a>
        </div>
      </nav>
    </motion.header>
  );
};
