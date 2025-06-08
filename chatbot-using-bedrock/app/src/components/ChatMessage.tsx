
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { text, isUser, timestamp } = message;

  return (
    <div className={cn(
      "flex gap-3 animate-fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={cn(
        "max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm border transition-all duration-200 hover:shadow-md",
        isUser 
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-sm" 
          : "bg-white/80 backdrop-blur-sm text-gray-800 rounded-bl-sm border-white/20"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
        <p className={cn(
          "text-xs mt-2 opacity-70",
          isUser ? "text-purple-100" : "text-gray-500"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      {isUser && (
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
