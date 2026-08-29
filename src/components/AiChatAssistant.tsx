import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  Mail, 
  GraduationCap, 
  ChevronDown,
  Minimize2,
  Maximize2,
  RefreshCw,
  HelpCircle
} from 'lucide-react';

interface AiChatAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenContact?: () => void;
}

export const AiChatAssistant: React.FC<AiChatAssistantProps> = ({
  isOpen,
  onToggle,
  onOpenContact,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Hello! I am your Parent Education Assistant from Parents Education Foundation in Waltham, MA. How can I help you support your child’s education today? Feel free to ask about parent-teacher meetings, IEP/504 processes, Massachusetts standards, or school policies.',
      timestamp: 'Just now',
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const quickPrompts = [
    'How do I prepare for a parent-teacher meeting?',
    'What are my rights regarding an IEP in MA?',
    'How can I help my child build homework focus?',
    'How do I contact the Waltham office?',
  ];

  const handleSendMessage = async (userPrompt?: string) => {
    const messageToSend = userPrompt || input.trim();
    if (!messageToSend || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!userPrompt) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageToSend,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Parents Education Foundation is here to support you. You can reach our Waltham, MA team at 781-890-6001.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback friendly guidance
      const fallbackMsg: ChatMessage = {
        id: `assistant-fb-${Date.now()}`,
        sender: 'assistant',
        text: 'Parents Education Foundation in Waltham, MA provides guidance for families across Massachusetts. For direct assistance, please call us at 781-890-6001 or email BCamenker@yahoo.com.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: 'Conversation reset. What questions do you have about your student’s education or school policies in Massachusetts?',
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50">
      {/* Closed Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          id="open-ai-chat-btn"
          className="group relative flex items-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-amber-300/40"
          aria-label="Open AI Parent Education Assistant"
        >
          <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-inner">
            <Sparkles className="w-4 h-4 text-slate-900 animate-pulse" />
          </div>
          <div className="text-left pr-1">
            <span className="block text-xs font-bold tracking-tight text-white">
              AI Parent Guide
            </span>
            <span className="block text-[10px] text-blue-200">
              Ask any education question
            </span>
          </div>
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div 
          className="bg-white rounded-2xl shadow-2xl border border-slate-300 w-[92vw] sm:w-[410px] max-h-[580px] h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
          id="ai-chat-window"
        >
          {/* Top Chat Header */}
          <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white p-4 flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm shadow">
                <GraduationCap className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                  <span>Parent Education Guide</span>
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                </h4>
                <p className="text-[11px] text-slate-300">
                  Parents Education Foundation • Waltham, MA
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={clearChat}
                id="reset-chat-btn"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                title="Clear conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={onToggle}
                id="close-chat-btn"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Minimize chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="bg-blue-50 px-3.5 py-1.5 border-b border-blue-100 text-[11px] text-blue-900 flex items-center justify-between">
            <span>Guidance for MA families & school navigation</span>
            <a 
              href="tel:7818906001" 
              className="font-bold text-blue-950 hover:underline flex items-center space-x-0.5"
            >
              <Phone className="w-2.5 h-2.5" />
              <span>781-890-6001</span>
            </a>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/60 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Bot className="w-4 h-4 text-amber-300" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? 'bg-blue-900 text-white rounded-br-xs'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs'
                    }`}
                  >
                    {msg.text}
                    <span
                      className={`block text-[10px] mt-1 text-right ${
                        isUser ? 'text-blue-200' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-lg bg-slate-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4 text-slate-200" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-amber-300" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs px-4 py-3 shadow-xs flex items-center space-x-1.5 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-xs text-slate-400 ml-1">Consulting education guides...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase shrink-0">Suggested:</span>
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="text-[11px] bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-900 px-2.5 py-1 rounded-full whitespace-nowrap border border-slate-200 transition-colors shrink-0 disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <div className="flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about IEP, school policies, homework..."
                disabled={isLoading}
                id="ai-chat-input-field"
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                id="ai-chat-send-btn"
                className="p-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
