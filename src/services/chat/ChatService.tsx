import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation/Navigation';
import ChatInterface from './ChatInterface';

const ChatService: React.FC = () => {
  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
    // Here you would typically send the message to your backend API
  };

  const handleVoiceMessage = () => {
    console.log('Voice message requested');
    // Implement voice recording functionality
  };

  const handleVoiceCall = () => {
    console.log('Voice call requested');
    // Implement voice call functionality
  };

  const handleVideoCall = () => {
    console.log('Video call requested');
    // Implement video call functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation showHamburger />
      
      <div className="pt-16 h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <ChatInterface
            contactName="AI Companion"
            contactAvatar="/images/ai-avatar.png"
            contactStatus="Always here to help"
            onSendMessage={handleSendMessage}
            onVoiceMessage={handleVoiceMessage}
            onVoiceCall={handleVoiceCall}
            onVideoCall={handleVideoCall}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ChatService;