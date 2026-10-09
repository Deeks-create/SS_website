/**
 * SSChatbot — Main floating chatbot component
 * Renders a floating button + slide-up chat panel with full conversation UX.
 * Uses React Router for navigation actions and framer-motion for animations.
 */
import React, { useState, useRef, useEffect, useCallback, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Minus,
  Send,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../../services/chatbot/types';
import { getResponse, SUGGESTED_PROMPTS } from '../../services/chatbot/intentEngine';
import { ChatMessageBubble } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';

// ─── Initial greeting ─────────────────────────────────────────────────────────
const INITIAL_MESSAGE: ChatMessageType = {
  id: 'init-0',
  role: 'assistant',
  text: `Hi! I'm the **SS Community Assistant**.\n\nAsk me anything about Struggle of Student — internships, events, talent showcases, joining the community, our team, or anything else. I'm here to help.`,
  actions: [
    { label: 'Explore Opportunities', route: '/opportunities', variant: 'primary' },
    { label: 'Join SS', route: '/join', variant: 'outline' },
    { label: 'Upcoming Events', route: '/events', variant: 'outline' },
  ],
  timestamp: new Date(),
};

let msgCounter = 1;
function newId() {
  return `msg-${++msgCounter}-${Date.now()}`;
}

export const SSChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelId = useId();

  // Scroll to bottom when messages change
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const openChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasUnread(false);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMessage: ChatMessageType = {
      id: newId(),
      role: 'user',
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await getResponse(trimmed);
      const assistantMessage: ChatMessageType = {
        id: newId(),
        role: 'assistant',
        text: response.text,
        actions: response.actions,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      if (!isOpen || isMinimized) setHasUnread(true);
    } catch {
      const errorMessage: ChatMessageType = {
        id: newId(),
        role: 'assistant',
        text: `Something went wrong on my end. Please try again, or visit the Contact page to reach the SS team directly.`,
        actions: [{ label: 'Contact SS', route: '/contact', variant: 'primary' }],
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [isTyping, isOpen, isMinimized]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  const showSuggestions = messages.length <= 1 && !isTyping;

  return (
    <>
      {/* ── Chat Panel ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            id={panelId}
            role="dialog"
            aria-label="SS Community Assistant"
            aria-modal="false"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={
              isMinimized
                ? { opacity: 1, y: 0, scale: 1, height: 'auto' }
                : { opacity: 1, y: 0, scale: 1, height: 'auto' }
            }
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', damping: 28, stiffness: 340 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[60] w-[calc(100vw-2rem)] sm:w-[380px] shadow-2xl shadow-black/60 rounded-3xl overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 8rem)' }}
          >
            {/* Panel wrapper */}
            <div className="flex flex-col bg-brand-card border border-brand-border rounded-3xl overflow-hidden" style={{ maxHeight: 'calc(100vh - 8rem)' }}>

              {/* ── Header ─────────────────────────────────────────────── */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-brand-dark via-[#140a0a] to-brand-dark border-b border-brand-border flex-shrink-0">
                <div className="flex items-center gap-2.5">
                  {/* Logo mark */}
                  <div className="relative w-8 h-8 rounded-full bg-brand-red/20 border border-brand-red/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-[11px] font-black text-brand-red">SS</span>
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-brand-card" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">SS Community Assistant</p>
                    <p className="text-emerald-400 text-[10px] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block" />
                      Online
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={minimizeChat}
                    aria-label="Minimize chat"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeChat}
                    aria-label="Close chat"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ── Minimized collapsed bar ────────────────────────────── */}
              <AnimatePresence>
                {isMinimized && (
                  <motion.button
                    key="minimized-bar"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMinimized(false)}
                    className="w-full px-4 py-3 text-left text-xs text-slate-400 hover:text-white hover:bg-brand-hover transition flex items-center justify-between"
                  >
                    <span>Click to expand conversation</span>
                    <ChevronDown className="w-4 h-4 rotate-180" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* ── Messages Area ──────────────────────────────────────── */}
              {!isMinimized && (
                <>
                  <div
                    className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0"
                    style={{ maxHeight: '340px' }}
                    aria-live="polite"
                    aria-label="Chat messages"
                  >
                    {messages.map(msg => (
                      <ChatMessageBubble key={msg.id} message={msg} />
                    ))}

                    {isTyping && <TypingIndicator />}

                    {/* Suggested prompts when conversation is fresh */}
                    {showSuggestions && (
                      <div className="pt-2">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-brand-red" />
                          Quick Questions
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {SUGGESTED_PROMPTS.map((prompt) => (
                            <button
                              key={prompt}
                              onClick={() => handleSuggestedPrompt(prompt)}
                              className="px-3 py-1.5 rounded-full text-xs font-medium bg-brand-hover border border-brand-border text-slate-300 hover:text-white hover:border-brand-red/50 hover:bg-brand-red/10 transition-all"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* ── Input Area ────────────────────────────────────── */}
                  <div className="flex-shrink-0 px-3 py-3 border-t border-brand-border bg-brand-dark/60 backdrop-blur-sm">
                    <div className="flex items-end gap-2 bg-brand-hover border border-brand-border rounded-2xl px-3 py-2 focus-within:border-brand-red/60 transition-colors">
                      <textarea
                        ref={inputRef}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        rows={1}
                        placeholder="Ask about internships, events, joining SS..."
                        aria-label="Chat input"
                        className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 resize-none outline-none leading-relaxed max-h-24 min-h-[1.5rem]"
                        style={{ fieldSizing: 'content' } as React.CSSProperties}
                        disabled={isTyping}
                      />
                      <button
                        onClick={() => sendMessage(inputValue)}
                        disabled={!inputValue.trim() || isTyping}
                        aria-label="Send message"
                        className="flex-shrink-0 w-8 h-8 rounded-xl bg-brand-red hover:bg-brand-red-hover disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-600 text-center mt-1.5">
                      Press <kbd className="px-1 py-0.5 rounded bg-brand-border text-slate-500 font-mono text-[9px]">Enter</kbd> to send · Shift+Enter for new line
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Trigger Button ──────────────────────────────────────── */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-[60]">
        <AnimatePresence mode="wait">
          {isOpen ? (
            /* Close button visible while panel is open */
            <motion.button
              key="close-fab"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={closeChat}
              aria-label="Close SS Community Assistant"
              className="w-14 h-14 rounded-full bg-brand-card border border-brand-border text-slate-300 hover:text-white shadow-xl flex items-center justify-center transition hover:bg-brand-hover"
            >
              <X className="w-5 h-5" />
            </motion.button>
          ) : (
            /* Open button — pulsing red SS button */
            <motion.button
              key="open-fab"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={openChat}
              aria-label="Open SS Community Assistant"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="relative w-14 h-14 rounded-full bg-brand-red hover:bg-brand-red-hover text-white shadow-xl shadow-brand-red/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-brand-red animate-ping opacity-25" />
              <MessageCircle className="w-6 h-6 relative z-10" />

              {/* Unread badge */}
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-brand-dark flex items-center justify-center">
                  <span className="text-[8px] font-black text-white">1</span>
                </span>
              )}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Tooltip label (desktop only, shows before first open) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.4 }}
            className="absolute right-16 bottom-3.5 hidden sm:flex items-center gap-2 bg-brand-card border border-brand-border rounded-full px-3 py-1.5 shadow-lg pointer-events-none"
          >
            <Sparkles className="w-3 h-3 text-brand-red" />
            <span className="text-xs font-semibold text-white whitespace-nowrap">SS Assistant</span>
          </motion.div>
        )}
      </div>
    </>
  );
};
