'use client';

import type { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowUp, Square } from 'lucide-react';
import React from 'react';

type Language = 'sv' | 'en';

interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
  disabled?: boolean;
  language?: Language;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
  disabled = false,
  language = 'sv',
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const placeholder = disabled
    ? ''
    : isToolInProgress
      ? language === 'sv'
        ? 'Hämtar portfolio-information…'
        : 'Loading portfolio information…'
      : language === 'sv'
        ? 'Fråga om projekt, erfarenhet eller teknik…'
        : 'Ask about projects, experience, or technical work…';

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      !isToolInProgress &&
      input.trim()
    ) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-2 md:pb-5"
    >
      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-full border border-[#E5E5E9] bg-[#ECECF0] py-2 pr-2 pl-6">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={placeholder}
            aria-label={
              language === 'sv'
                ? 'Skriv en fråga till Ibbo AI Portfolio'
                : 'Write a question to Ibbo AI Portfolio'
            }
            className={`text-md w-full border-none bg-transparent placeholder:text-gray-500 focus:outline-none ${
              disabled ? 'text-muted-foreground font-medium' : 'text-black'
            }`}
            disabled={isToolInProgress || isLoading || disabled}
          />

          <button
            type={isLoading ? 'button' : 'submit'}
            disabled={!isLoading && (!input.trim() || isToolInProgress || disabled)}
            className="flex items-center justify-center rounded-full bg-[#0171E3] p-2 text-white disabled:opacity-50"
            onClick={isLoading ? stop : undefined}
            aria-label={
              isLoading
                ? language === 'sv'
                  ? 'Stoppa svar'
                  : 'Stop response'
                : language === 'sv'
                  ? 'Skicka fråga'
                  : 'Send question'
            }
          >
            {isLoading ? <Square className="h-5 w-5 fill-current" /> : <ArrowUp className="h-6 w-6" />}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
