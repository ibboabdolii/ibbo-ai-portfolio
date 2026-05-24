'use client';

import { useChat } from '@ai-sdk/react';
import { AnimatePresence, motion, type HTMLMotionProps } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

import ChatBottombar from '@/components/chat/chat-bottombar';
import ChatLanding from '@/components/chat/chat-landing';
import ChatMessageContent from '@/components/chat/chat-message-content';
import { SimplifiedChatView } from '@/components/chat/simple-chat-view';
import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import WelcomeModal from '@/components/welcome-modal';
import { Info } from 'lucide-react';
import HelperBoost from './HelperBoost';

type Language = 'sv' | 'en';

const LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return <>{children}</>;
};

interface AvatarProps {
  hasActiveTool: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isTalking: boolean;
}

const Avatar = dynamic<AvatarProps>(
  () =>
    Promise.resolve(({ hasActiveTool, videoRef }: AvatarProps) => {
      const isIOS = () => {
        const userAgent = window.navigator.userAgent;
        const platform = window.navigator.platform;
        const maxTouchPoints = window.navigator.maxTouchPoints || 0;

        const isIOSByUA =
          /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
        const isIOSByPlatform = /iPad|iPhone|iPod/.test(platform);
        const isIPadOS =
          platform === 'MacIntel' &&
          maxTouchPoints > 1 &&
          !(window as any).MSStream;
        const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);

        return isIOSByUA || isIOSByPlatform || isIPadOS || isSafari;
      };

      return (
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            hasActiveTool ? 'h-20 w-20' : 'h-28 w-28'
          }`}
        >
          <div
            className="relative h-full w-full cursor-pointer overflow-hidden rounded-full"
            onClick={() => (window.location.href = '/')}
          >
            {isIOS() ? (
              <img
                src="/landing-memojis.png"
                alt="avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                muted
                playsInline
                loop
              >
                <source src="/final_memojis.webm" type="video/webm" />
                <source src="/final_memojis_ios.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      );
    }),
  { ssr: false }
);

const MOTION_CONFIG: Pick<
  HTMLMotionProps<'div'>,
  'initial' | 'animate' | 'exit' | 'transition'
> = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

const Chat = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query');
  const langParam = searchParams.get('lang');

  const [language, setLanguage] = useState<Language>('sv');
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isTalking, setIsTalking] = useState(false);

  const hasReachedLimit = false;

  const {
    messages,
    input,
    handleInputChange,
    isLoading,
    stop,
    setInput,
    reload,
    addToolResult,
    append,
  } = useChat({
    onResponse: (response) => {
      if (response) {
        setLoadingSubmit(false);
        setIsTalking(true);
        if (videoRef.current) {
          videoRef.current
            .play()
            .catch((error) => console.error('Failed to play video:', error));
        }
      }
    },
    onFinish: () => {
      setLoadingSubmit(false);
      setIsTalking(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    },
    onError: (error) => {
      setLoadingSubmit(false);
      setIsTalking(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
      console.error('Chat error:', error.message, error.cause);
      toast.error(`Error: ${error.message}`);
    },
    onToolCall: (tool) => {
      const toolName = (tool as any).toolCall.toolName;
      console.log('Tool call:', toolName);
    },
  });

  const { currentAIMessage, latestUserMessage, hasActiveTool } = useMemo(() => {
    const latestAIMessageIndex = messages.findLastIndex(
      (m) => m.role === 'assistant'
    );
    const latestUserMessageIndex = messages.findLastIndex(
      (m) => m.role === 'user'
    );

    const result: {
      currentAIMessage: any;
      latestUserMessage: any;
      hasActiveTool: boolean;
    } = {
      currentAIMessage:
        latestAIMessageIndex !== -1 ? messages[latestAIMessageIndex] : null,
      latestUserMessage:
        latestUserMessageIndex !== -1 ? messages[latestUserMessageIndex] : null,
      hasActiveTool: false,
    };

    if (result.currentAIMessage) {
      result.hasActiveTool =
        result.currentAIMessage.parts?.some(
          (part: any) =>
            part.type === 'tool-invocation' &&
            part.toolInvocation?.state === 'result'
        ) || false;
    }

    if (latestAIMessageIndex < latestUserMessageIndex) {
      result.currentAIMessage = null;
    }

    return result;
  }, [messages]);

  const isToolInProgress = messages.some(
    (m: any) =>
      m.role === 'assistant' &&
      m.parts?.some(
        (part: any) =>
          part.type === 'tool-invocation' &&
          part.toolInvocation?.state !== 'result'
      )
  );

  const submitQuery = (query: string) => {
    if (!query.trim() || isToolInProgress) return;

    setLoadingSubmit(true);
    append({
      role: 'user',
      content: query,
    });
  };

  const setPreferredLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);

    const params = new URLSearchParams(window.location.search);
    params.set('lang', nextLanguage);
    const nextUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', nextUrl);
  };

  useEffect(() => {
    const nextLanguage =
      langParam === 'sv' || langParam === 'en'
        ? langParam
        : window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (nextLanguage === 'sv' || nextLanguage === 'en') {
      setLanguage(nextLanguage);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    }
  }, [langParam]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.pause();
    }

    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      setInput('');
      submitQuery(initialQuery);
    }
  }, [initialQuery, autoSubmitted, setInput]);

  useEffect(() => {
    if (videoRef.current) {
      if (isTalking) {
        videoRef.current
          .play()
          .catch((error) => console.error('Failed to play video:', error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isTalking]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isToolInProgress) return;
    submitQuery(input);
    setInput('');
  };

  const handleStop = () => {
    stop();
    setLoadingSubmit(false);
    setIsTalking(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const isEmptyState =
    !currentAIMessage && !latestUserMessage && !loadingSubmit;

  const headerHeight = hasActiveTool ? 100 : 180;

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-4 right-4 z-50 flex items-center justify-center gap-1.5 sm:top-6 sm:right-8 sm:gap-2">
        <div className="flex rounded-full border border-neutral-200 bg-white/85 p-1 text-[11px] font-semibold shadow-sm backdrop-blur-md sm:text-xs">
          <button
            type="button"
            onClick={() => setPreferredLanguage('sv')}
            className={`rounded-full px-2.5 py-1 transition sm:px-3 ${
              language === 'sv'
                ? 'bg-[#0171E3] text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            aria-label="Visa chatten på svenska"
          >
            SV
          </button>
          <button
            type="button"
            onClick={() => setPreferredLanguage('en')}
            className={`rounded-full px-2.5 py-1 transition sm:px-3 ${
              language === 'en'
                ? 'bg-[#0171E3] text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            aria-label="Show chat in English"
          >
            EN
          </button>
        </div>

        <WelcomeModal
          trigger={
            <div className="hover:bg-accent flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/85 shadow-sm backdrop-blur-md transition sm:h-10 sm:w-10">
              <Info className="text-accent-foreground h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          }
        />
      </div>

      <div
        className="fixed top-0 right-0 left-0 z-40"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${
            hasActiveTool ? 'pt-6 pb-0' : 'py-6'
          }`}
        >
          <div className="flex justify-center">
            <ClientOnly>
              <Avatar
                hasActiveTool={hasActiveTool}
                videoRef={videoRef}
                isTalking={isTalking}
              />
            </ClientOnly>
          </div>

          <AnimatePresence>
            {latestUserMessage && !currentAIMessage && (
              <motion.div
                {...MOTION_CONFIG}
                className="mx-auto flex max-w-3xl px-4"
              >
                <ChatBubble variant="sent">
                  <ChatBubbleMessage>
                    <ChatMessageContent
                      message={latestUserMessage}
                      isLast={true}
                      isLoading={false}
                      reload={() => Promise.resolve(null)}
                    />
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="container mx-auto flex h-full max-w-3xl flex-col">
        <div
          className="flex-1 overflow-y-auto px-2"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          <AnimatePresence mode="wait">
            {isEmptyState ? (
              <motion.div
                key="landing"
                className="flex min-h-full items-center justify-center"
                {...MOTION_CONFIG}
              >
                <ChatLanding submitQuery={submitQuery} hasReachedLimit={false} />
              </motion.div>
            ) : currentAIMessage ? (
              <div className="pb-4">
                <SimplifiedChatView
                  message={currentAIMessage}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                />
              </div>
            ) : (
              loadingSubmit && (
                <motion.div
                  key="loading"
                  {...MOTION_CONFIG}
                  className="px-4 pt-18"
                >
                  <ChatBubble variant="received">
                    <ChatBubbleMessage isLoading />
                  </ChatBubble>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <div className="sticky bottom-0 bg-white px-2 pt-3 md:px-0 md:pb-4">
          <div className="relative flex flex-col items-center gap-3">
            <HelperBoost
              language={language}
              submitQuery={submitQuery}
              setInput={setInput}
              hasReachedLimit={false}
            />
            <ChatBottombar
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={onSubmit}
              isLoading={isLoading}
              stop={handleStop}
              isToolInProgress={isToolInProgress}
              disabled={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
