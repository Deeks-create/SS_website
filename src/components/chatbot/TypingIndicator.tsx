/**
 * TypingIndicator — Animated 3-dot indicator shown while assistant is processing
 */
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Avatar */}
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center">
        <span className="text-[10px] font-black text-brand-red">SS</span>
      </div>

      {/* Bubble */}
      <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-brand-hover border border-brand-border">
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
            style={{ animationDelay: '0ms', animationDuration: '1s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
            style={{ animationDelay: '160ms', animationDuration: '1s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
            style={{ animationDelay: '320ms', animationDuration: '1s' }}
          />
        </div>
      </div>
    </div>
  );
};
