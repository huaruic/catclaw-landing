import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Search,
  Users,
  Puzzle,
  Settings,
  Paperclip,
  Globe,
  Mic,
  ArrowUp,
  ChevronDown,
  Code2,
  FileText,
  Zap,
  BookOpen,
  Copy,
  FileIcon,
  CheckCircle2,
} from 'lucide-react';
import { PawLogo } from './ui/CatIcons';
import sleepSvg from '../assets/sleep.svg';

type Phase = 'welcome' | 'typing' | 'chat-loading' | 'chat-reply';

const PHASE_DURATIONS: Record<Phase, number> = {
  welcome: 3000,
  typing: 1500,
  'chat-loading': 2000,
  'chat-reply': 4000,
};

const PHASE_ORDER: Phase[] = ['welcome', 'typing', 'chat-loading', 'chat-reply'];

const sidebarItems = [
  { icon: Plus, label: 'New Chat' },
  { icon: Search, label: 'Search' },
  { icon: Users, label: 'Agents' },
  { icon: Puzzle, label: 'Skills' },
];

const recentChats = ['hey', 'hello'];

const quickStartCards = [
  { icon: Code2, title: 'Write a script', color: 'text-cat-orange' },
  { icon: FileText, title: 'Analyze document', color: 'text-cat-orange' },
  { icon: Zap, title: 'Brainstorm ideas', color: 'text-cat-orange' },
  { icon: BookOpen, title: 'Research topic', color: 'text-cat-orange' },
];

const TypewriterText: React.FC<{ text: string; isActive: boolean }> = ({ text, isActive }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplayed('');
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [isActive, text]);

  return <span>{displayed}</span>;
};

export const AppMockup: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('welcome');

  useEffect(() => {
    const idx = PHASE_ORDER.indexOf(phase);
    const duration = PHASE_DURATIONS[phase];
    const timer = setTimeout(() => {
      const nextIdx = (idx + 1) % PHASE_ORDER.length;
      setPhase(PHASE_ORDER[nextIdx]);
    }, duration);
    return () => clearTimeout(timer);
  }, [phase]);

  const isWelcome = phase === 'welcome';
  const isTyping = phase === 'typing';
  const isChatLoading = phase === 'chat-loading';
  const isChatReply = phase === 'chat-reply';
  const isChat = isChatLoading || isChatReply;

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-cozy border border-[hsl(20,6%,22%)] bg-[hsl(20,6%,10%)] text-[hsl(30,15%,92%)] text-[10px] leading-tight select-none">
      {/* macOS Title Bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[hsl(20,6%,12%)] border-b border-[hsl(20,6%,18%)]">
        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-[9px] font-bold text-[hsl(30,10%,50%)]">CatClaw</span>
      </div>

      <div className="flex" style={{ height: 260 }}>
        {/* Sidebar */}
        <div className="w-[72px] shrink-0 bg-[hsl(20,6%,11%)] border-r border-[hsl(20,6%,18%)] flex flex-col py-2 px-1.5">
          {/* App Logo */}
          <div className="flex items-center gap-1 px-1 mb-2">
            <div className="w-4 h-4 rounded bg-cat-orange flex items-center justify-center">
              <PawLogo className="w-2.5 h-2.5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold leading-none">CatClaw</span>
              <span className="flex items-center gap-0.5 text-[6px] text-green-500 leading-none">
                <span className="w-1 h-1 rounded-full bg-green-500 inline-block" />
                Running
              </span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-0.5">
            {sidebarItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1 px-1 py-0.5 rounded text-[hsl(30,10%,60%)] hover:bg-[hsl(20,6%,16%)] transition-colors"
              >
                <Icon className="w-2.5 h-2.5" />
                <span className="text-[7px]">{label}</span>
              </div>
            ))}
          </div>

          {/* Recents */}
          <div className="mt-2 pt-1.5 border-t border-[hsl(20,6%,18%)]">
            <span className="text-[6px] font-bold text-[hsl(30,10%,40%)] px-1 uppercase tracking-wider">
              Recents
            </span>
            <div className="flex flex-col gap-0.5 mt-1">
              {recentChats.map((chat, i) => (
                <div
                  key={chat}
                  className={`text-[7px] px-1 py-0.5 rounded truncate ${
                    i === 0 && isChat
                      ? 'text-cat-orange bg-cat-orange/10'
                      : 'text-[hsl(30,10%,55%)]'
                  }`}
                >
                  {chat}
                </div>
              ))}
            </div>
          </div>

          {/* Settings at bottom */}
          <div className="mt-auto flex items-center gap-1 px-1 text-[hsl(30,10%,50%)]">
            <Settings className="w-2.5 h-2.5" />
            <span className="text-[7px]">Settings</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[hsl(20,6%,10%)]">
          {/* Content Area */}
          <div className="flex-1 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {/* Welcome Screen */}
              {(isWelcome || isTyping) && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center px-3"
                >
                  {/* Sleeping cat icon */}
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-16 h-12 mb-2"
                  >
                    <img src={sleepSvg} alt="" className="w-full h-full object-contain" />
                  </motion.div>
                  <span className="text-sm font-black mb-3">Good morning</span>

                  {/* Quick Start Cards */}
                  <div className="grid grid-cols-2 gap-1.5 w-full max-w-[200px]">
                    {quickStartCards.map(({ icon: Icon, title }) => (
                      <div
                        key={title}
                        className="flex items-center gap-1 px-1.5 py-1.5 rounded-md border border-[hsl(20,6%,20%)] bg-[hsl(20,6%,12%)]"
                      >
                        <Icon className="w-2.5 h-2.5 text-cat-orange shrink-0" />
                        <span className="text-[7px] truncate">{title}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Chat Screen */}
              {isChat && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col px-3 py-2"
                >
                  {/* User Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-end mb-2"
                  >
                    <div className="bg-[hsl(20,10%,20%)] rounded-2xl rounded-br-sm px-2.5 py-1.5 max-w-[60%]">
                      <span className="text-[10px]">hey</span>
                    </div>
                    <span className="text-[6px] text-[hsl(30,10%,40%)] mt-0.5">04:11 AM</span>
                  </motion.div>

                  {/* AI Loading */}
                  {isChatLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-1.5"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <PawLogo className="w-3.5 h-3.5 text-cat-orange" />
                      </motion.div>
                      <span className="text-[8px] text-[hsl(30,10%,50%)] font-mono">1.8s</span>
                    </motion.div>
                  )}

                  {/* AI Reply */}
                  {isChatReply && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-1.5"
                    >
                      {/* Actions badge */}
                      <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[hsl(20,6%,14%)] border border-[hsl(20,6%,20%)] w-fit text-[8px] text-[hsl(30,10%,60%)]">
                        <FileIcon className="w-2.5 h-2.5" />
                        5 actions, 1 message
                        <ChevronDown className="w-2 h-2" />
                      </div>

                      {/* Tool call results */}
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded border border-[hsl(20,6%,20%)] text-[7px] text-[hsl(30,10%,55%)]">
                          <CheckCircle2 className="w-2 h-2 text-green-500" />
                          Finished reading file
                        </div>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded border border-[hsl(20,6%,20%)] text-[7px] text-[hsl(30,10%,55%)]">
                          <CheckCircle2 className="w-2 h-2 text-green-500" />
                          Finished reading file
                        </div>
                      </div>

                      {/* Response text */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-[8px] leading-relaxed text-[hsl(30,10%,70%)]"
                      >
                        hey. I just came online, and this workspace is basically a blank slate.
                      </motion.div>

                      {/* Time + copy */}
                      <div className="flex items-center gap-1 text-[7px] text-[hsl(30,10%,40%)]">
                        <span className="font-mono">11s</span>
                        <Copy className="w-2 h-2" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Bar (always visible) */}
          <div className="px-2 pb-2">
            <div className="rounded-xl border border-[hsl(20,6%,20%)] bg-[hsl(20,6%,13%)] px-2 py-1.5">
              {/* Input text */}
              <div className="text-[9px] text-[hsl(30,10%,40%)] mb-1 min-h-[12px]">
                {isTyping ? (
                  <span className="text-[hsl(30,15%,92%)]">
                    <TypewriterText text="hey" isActive={isTyping} />
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-[1px] h-2.5 bg-cat-orange ml-px align-middle"
                    />
                  </span>
                ) : isChat ? (
                  'Continue the conversation...'
                ) : (
                  'How can I help you today?'
                )}
              </div>
              {/* Toolbar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[hsl(30,10%,45%)]">
                  <Plus className="w-2.5 h-2.5" />
                  <Paperclip className="w-2.5 h-2.5" />
                  <Globe className="w-2.5 h-2.5" />
                  <Mic className="w-2.5 h-2.5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[7px] text-[hsl(30,10%,50%)] flex items-center gap-0.5">
                    gpt-5.4
                    <ChevronDown className="w-2 h-2" />
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                      isTyping
                        ? 'bg-cat-orange text-white'
                        : 'bg-[hsl(20,6%,18%)] text-[hsl(30,10%,45%)]'
                    }`}
                  >
                    <ArrowUp className="w-2.5 h-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
