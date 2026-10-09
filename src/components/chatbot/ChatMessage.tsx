/**
 * ChatMessage — Individual message bubble for user and assistant messages
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../../services/chatbot/types';

interface ChatMessageProps {
  message: ChatMessageType;
}

/** Very lightweight markdown-like text renderer: **bold**, newlines, bullet points */
function renderText(text: string) {
  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-1" />;

        // Bold: **text**
        const parts = line.split(/\*\*(.*?)\*\*/g);
        const renderedParts = parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className="text-white font-semibold">
              {part}
            </strong>
          ) : (
            <span key={j}>{part}</span>
          )
        );

        // Bullet point
        if (line.trim().startsWith('•')) {
          return (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-brand-red mt-0.5 flex-shrink-0">•</span>
              <span>{renderedParts}</span>
            </div>
          );
        }

        // 📌 📧 📞 🕐 📍 — treat as icon lines
        const startsWithEmoji = /^[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}]/u.test(line);
        if (startsWithEmoji) {
          return (
            <div key={i} className="text-sm flex items-start gap-1.5">
              {renderedParts}
            </div>
          );
        }

        return (
          <p key={i} className="text-sm leading-relaxed">
            {renderedParts}
          </p>
        );
      })}
    </div>
  );
}

export const ChatMessageBubble: React.FC<ChatMessageProps> = ({ message }) => {
  const navigate = useNavigate();
  const isUser = message.role === 'user';

  const handleAction = (route: string, external?: boolean) => {
    if (external) {
      window.open(route, '_blank', 'noopener,noreferrer');
    } else {
      navigate(route);
    }
  };

  if (isUser) {
    return (
      <div className="flex items-end justify-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
        <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-brand-red text-white text-sm leading-relaxed shadow-md shadow-brand-red/20">
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Assistant avatar */}
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center mt-0.5">
        <span className="text-[10px] font-black text-brand-red">SS</span>
      </div>

      <div className="max-w-[82%] space-y-2.5">
        {/* Text bubble */}
        <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-brand-hover border border-brand-border text-slate-200 shadow-sm">
          {renderText(message.text)}
        </div>

        {/* Action buttons */}
        {message.actions && message.actions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {message.actions.map((action, i) => {
              const isPrimary = action.variant === 'primary' || (!action.variant && i === 0);
              return (
                <button
                  key={i}
                  onClick={() => handleAction(action.route, action.external)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 ${
                    isPrimary
                      ? 'bg-brand-red hover:bg-brand-red-hover text-white shadow-md shadow-brand-red/20'
                      : 'bg-brand-card border border-brand-border text-slate-300 hover:text-white hover:border-slate-600'
                  }`}
                >
                  <span>{action.label}</span>
                  {action.external ? (
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  ) : (
                    <ArrowRight className="w-3 h-3 opacity-70" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
